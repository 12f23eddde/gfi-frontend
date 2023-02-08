import React, {useCallback, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {Col, Container, Row} from 'react-bootstrap';

import '../../style/gfiStyle.css';
import {checkIsGitRepoURL, checkIsNumber, convertFilter} from '../../utils';

import {GFIAlert, GFIPagination} from '../../components';

import {checkGithubLogin} from '../../api/github';

import {
  createGlobalProgressBarAction,
  createLogoutAction,
  createMainPageLangTagSelectedAction,
  createPopoverAction
} from '../../storage/reducers';
import {GFI_REPO_FILTER_NONE, GFIMainPageHeader} from './MainHeader';

import {GFIIssueMonitor, GFIRepoDisplayView, GFIRepoStaticsDemonstrator} from './GFIRepoDisplayView';
// import { GFITrainingSummary, RepoBrief, RepoSort } from '../../model/api';
import {RepoSort} from '../../api/gfibot.d';
import {GFIRootReducers} from '../../storage/configureStorage';
import {GFITrainingSummaryDisplayView} from './GFITrainingSummaryDisplayView';
import {useIsMobile, useWindowSize} from '../../contexts/WindowContext';
import {GFILangPanel} from './GFILangPanel';
import {GFINotiToast} from '../../components/GFINotiToast';

export function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    checkGithubLogin().then((res) => {
      if (!res) {
        dispatch(createLogoutAction());
      }
    });
    dispatch(createPopoverAction());
  }, []);

  const [showLoginMsg, setShowLoginMsg] = useState(false);
  const [showSearchMsg, setShowSearchMsg] = useState(false);
  const [showBannerMsg, setShowBannerMsg] = useState(true);

  const isMobile = useIsMobile();
  const {width, height} = useWindowSize();

  const userName = useSelector((state: GFIRootReducers) => {
    return state.loginReducer?.name;
  });

  const userAvatarUrl = useSelector((state: GFIRootReducers) => {
    return state.loginReducer?.avatar;
  });

  const emptyRepoInfo: RepoBrief = {
    name: '',
    owner: '',
    description: '',
    language: '',
    topics: []
  };

  const [displayRepoInfo, setDisplayRepoInfo] = useState<RepoBrief[] | undefined>([emptyRepoInfo]);
  const [alarmConfig, setAlarmConfig] = useState({show: false, msg: ''});

  const showAlarm = (msg: string) => {
    setAlarmConfig({show: true, msg});
  };

  interface LocationStateLoginType {
    state: {
      justLogin: boolean;
    };
  }

  const location = useLocation() as LocationStateLoginType;

  useEffect(() => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const name = urlParams.get('name');
    const owner = urlParams.get('owner');
    if (name && owner) {
      getRepoInfo(name, owner).then((res) => {
        if (res) {
          handleSearchBtn(name);
        }
      });
    } else {
      fetchRepoInfoList(1);
      setPageIdx(1);
      getRepoNum(selectedTag).then((res) => {
        if (res && Number.isInteger(res)) {
          setTotalRepos(res);
        }
      });
    }
    if ('state' in location && location.state && location.state.justLogin) {
      setShowLoginMsg(true);
    }
  }, []);

  const repoCapacity = 5;
  const [pageIdx, setPageIdx] = useState(0);
  const [totalRepos, setTotalRepos] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [selectedFilter, setSelectedFilter] = useState<string>();
  let [pageFormInput, setPageFormInput] = useState<string | number | undefined>(
    0
  );
  const [trainingSummary, setTrainingSummary] = useState<{
    [key: string]: GFITrainingSummary;
  }>();

  const pageNums = () => {
    if (totalRepos % repoCapacity === 0) {
      return Math.floor(totalRepos / repoCapacity);
    }
    return Math.floor(totalRepos / repoCapacity) + 1;
  };

  const toPage = (i: number) => {
    if (i >= 1 && i <= pageNums()) {
      setPageIdx(i);
    }
  };

  useEffect(() => {
    if (selectedTag || selectedFilter) {
      const _tag = selectedTag === 'All' ? undefined : selectedTag;
      fetchRepoInfoList(1, _tag, convertFilter(selectedFilter));
      setPageIdx(1);
      dispatch(
        createMainPageLangTagSelectedAction({
          tagSelected: selectedTag
        })
      );
    }
  }, [selectedTag, selectedFilter]);

  useEffect(() => {
    if (pageIdx) {
      fetchRepoInfoList(pageIdx, selectedTag, convertFilter(selectedFilter));
    }
  }, [pageIdx]);

  const generateTrainingSummaryKey = (name: string, owner: string) =>
    owner + name;

  useEffect(() => {
    if (displayRepoInfo) {
      Promise.all(
        displayRepoInfo.map((repoInfo) =>
          getTrainingSummary(repoInfo.name, repoInfo.owner)
        )
      ).then((values) => {
        if (values) {
          const res = values.flat();
          if (res) {
            const trainingSummary: { [key: string]: GFITrainingSummary } = {};
            for (const summary of res) {
              if (summary) {
                trainingSummary[
                  generateTrainingSummaryKey(summary.name, summary.owner)
                ] = summary;
              }
            }
            setTrainingSummary(trainingSummary);
          }
        }
      });
    }
  }, [displayRepoInfo]);

  const fetchRepoInfoList = (
    pageNum: number,
    tag?: string,
    filter?: RepoSort
  ) => {
    const beginIdx = (pageNum - 1) * repoCapacity;
    dispatch(createGlobalProgressBarAction({hidden: false}));
    getRepoNum(selectedTag).then((res) => {
      if (res && Number.isInteger(res)) {
        setTotalRepos(res);
      }
    });
    getPagedRepoBrief(beginIdx, repoCapacity, tag, filter).then((repoList) => {
      if (repoList && Array.isArray(repoList)) {
        const repoInfoList = repoList.map((repo) => {
          if ('name' in repo && 'owner' in repo) {
            return {
              name: repo.name,
              owner: repo.owner,
              language: repo.language ? repo.language : undefined,
              description: repo.description ? repo.description : undefined,
              topics: 'topics' in repo ? repo.topics : undefined
            };
          }
          return emptyRepoInfo;
        });
        setDisplayRepoInfo(repoInfoList);
      }
      dispatch(createGlobalProgressBarAction({hidden: true}));
    });
  };

  const onPageBtnClicked = () => {
    if (checkIsNumber(pageFormInput)) {
      pageFormInput = Number(pageFormInput);
      if (pageFormInput > 0 && pageFormInput <= pageNums()) {
        toPage(pageFormInput);
      }
    }
  };

  const handleSearchBtn = useCallback((s: string) => {
    let repoURL: string | undefined = s;
    let repoName;
    if (!checkIsGitRepoURL(s)) {
      repoURL = undefined;
      repoName = s;
    }
    dispatch(createGlobalProgressBarAction({hidden: false}));
    searchRepoInfoByNameOrURL(repoName, repoURL).then((res) => {
      if (res) {
        setTotalRepos(1);
        setDisplayRepoInfo(res);
        setShowSearchMsg(true);
      } else {
        showAlarm(
          'This repository hasn\'t been added to our database yet. Please connect with its maintainers.'
        );
      }
      dispatch(createGlobalProgressBarAction({hidden: true}));
    });
  }, []);

  const renderInfoComponent = () => {
    if (displayRepoInfo && displayRepoInfo.length) {
      return displayRepoInfo.map((item, _) => {
        const summary = trainingSummary
          ? trainingSummary[generateTrainingSummaryKey(item.name, item.owner)]
          : undefined;
        return (
          <GFIRepoDisplayView
            key={`repo-display-main-${item.name}-${item.owner}`}
            className="default-box-shadow"
            repoInfo={item}
            tags={['GFI', 'Repo Data']}
            panels={[
              <GFIIssueMonitor
                repoInfo={item}
                trainingSummary={summary}
                key={1}
              />,
              <GFIRepoStaticsDemonstrator
                repoInfo={item}
                trainingSummary={summary}
                key={2}
              />
            ]}
            style={{
              border: '1px solid var(--color-border-default)',
              borderRadius: '7px',
              marginBottom: '1rem'
            }}
          />
        );
      });
    }
    return <></>;
  };

  const renderMainArea = () => {
    return (
      <Row>
        <Col className="flex-row align-items-start justify-content-start">
          <Container
            className="flex-col"
            style={{
              padding: '0px',
              marginLeft: '0px',
              width: isMobile ? '100%' : '65%'
            }}
          >
            {renderInfoComponent()}
            <GFIPagination
              pageIdx={pageIdx}
              toPage={(pageNum) => {
                toPage(pageNum);
              }}
              pageNums={pageNums()}
              onFormInput={(target) => {
                const t = target as HTMLTextAreaElement;
                setPageFormInput(t.value);
              }}
              onPageBtnClicked={() => {
                onPageBtnClicked();
              }}
              maxPagingCount={3}
              needInputArea
            />
          </Container>
          {!isMobile ? (
            <Container
              style={{
                width: '35%',
                maxWidth: '430px',
                minWidth: '310px',
                padding: '0'
              }}
            >
              <div className="flex-col align-center">
                <GFILangPanel
                  onTagClicked={(tag) => {
                    if (tag) {
                      setSelectedTag(tag);
                    } else {
                      setSelectedTag(undefined);
                      dispatch(
                        createMainPageLangTagSelectedAction({
                          tagSelected: 'All'
                        })
                      );
                    }
                  }}
                />
                <GFITrainingSummaryDisplayView/>
              </div>
            </Container>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Container className="single-page">
        <Row
          style={{
            marginBottom: alarmConfig.show ? '-15px' : '0',
            marginTop: alarmConfig.show ? '15px' : '0'
          }}
        >
          {alarmConfig.show ? (
            <GFIAlert
              title={alarmConfig.msg}
              onClose={() => {
                setAlarmConfig({show: false, msg: alarmConfig.msg});
              }}
            />
          ) : (
            <></>
          )}
        </Row>
        <Row>
          <Col>
            <Container
              style={{
                padding: '0px',
                marginLeft: '0px',
                maxWidth: isMobile ? '100%' : '60%'
              }}
            >
              <GFIMainPageHeader
                onSearch={(s) => {
                  handleSearchBtn(s);
                }}
                onTagSelected={(s) => {
                  if (s !== selectedTag) {
                    setSelectedTag(s !== GFI_REPO_FILTER_NONE ? s : undefined);
                  }
                }}
                onFilterSelect={(s) => {
                  if (s !== selectedFilter) {
                    const str = s as string;
                    setSelectedFilter(
                      str !== GFI_REPO_FILTER_NONE ? s : undefined
                    );
                  }
                }}
              />
            </Container>
          </Col>
        </Row>
        <Row>
          <GFINotiToast
            show={showBannerMsg}
            userName={userName || 'visitor'}
            userAvatarUrl={userAvatarUrl}
            onClose={() => {
              setShowBannerMsg(false);
            }}
            context="GFI-Bot is under active development and not ready for production yet."
          />
          <GFINotiToast
            show={showLoginMsg}
            userName={userName || 'visitor'}
            userAvatarUrl={userAvatarUrl}
            onClose={() => {
              setShowLoginMsg(false);
            }}
          />
          <GFINotiToast
            show={showSearchMsg}
            userName={userName || 'visitor'}
            userAvatarUrl={userAvatarUrl}
            onClose={() => {
              setShowSearchMsg(false);
            }}
            context="Searching Completed!"
          />
        </Row>
        {renderMainArea()}
      </Container>
      <Container
        style={{
          width,
          maxWidth: width,
          height,
          position: 'fixed',
          top: '0',
          zIndex: '-1000'
        }}
        className="background"
      />
    </>
  );
}