import React, {useState, useContext, useEffect} from 'react';
import {GFIToastContext} from '../components/GFIToast';

import {repoPagedMock} from '../api/gfibot.mock';
import {Badge, Col, ListGroup, Row} from 'react-bootstrap';
import type {RepoDetail} from '../api/gfibot.d'
import {GFIPaginate} from '../components/GFIPaginate';
import {getRepoPaged} from '../api/gfibot';

const repoMock = repoPagedMock.result[0];

type SimpleTrainInfoTagProp = {
  title: string,
  data: number,
}

/** A simple tag like [AUC|0.99] */
function SimpleDataTag({title, data}: SimpleTrainInfoTagProp) {
  return (
    <div
      className="simple-train-info-tag flex-row align-items-stretch"
      style={{marginRight: '0.4rem'}}
    >
      <div>{title}</div>
      <div>{typeof data === 'number' ? data.toFixed(2) : 'NaN'}</div>
    </div>
  );
}

function RepoDataPanel({repo}: { repo: typeof repoMock }) {
  return (
    <div className="repo-data-panel">
      <div className="flex-row align-items-stretch">
        <SimpleDataTag title={'AUC'} data={repo.auc}/>
        <SimpleDataTag title={'Accuracy'} data={repo.accuracy}/>
      </div>
    </div>
  );
}

function RepoInfoCard(props: RepoDetail) {
  const [isActive, setIsActive] = useState(false);
  return (
    <ListGroup.Item
      action
      as="button"
      onClick={() => {
      }}
      variant={isActive ? 'primary' : 'light'}
    >
      <Row>
        <Col
          style={{
            fontWeight: 'bold',
            textDecoration: isActive ? 'underline' : 'none'
          }}
          sm={9}
        >
          {' '}
          {props.name}{' '}
        </Col>
        <Col sm={3}>
          <Badge
            pill
            style={{position: 'absolute', right: '5px', top: '5px'}}
          >
            {' '}
            Stars: {props.n_stars}{' '}
          </Badge>
        </Col>
      </Row>
      <Row>
        <Col sm={9}> Language: {props.language} </Col>
      </Row>
      <Row>
        <Col sm={9}> Owner: {props.owner} </Col>
      </Row>
    </ListGroup.Item>
  );
}


export function GFITest() {
  const {addToast} = useContext(GFIToastContext);
  useEffect(() => {
    addToast({
      title: 'Hello You Mate!',
      text: 'Hello World!',
      closeDelay: 1000,
    })
    addToast({
      title: 'GoodBye You Mate!',
      text: 'Goodbye World!',
      closeDelay: -1,
    })
  }, [])
  return (
    <>
      <RepoDataPanel repo={repoMock}/>
      <RepoInfoCard {...repoMock}/>
      <GFIPaginate<RepoDetail>
        useDataParams={{promise: getRepoPaged}}
        item={(data) => <RepoInfoCard key={data.owner + '/' + data.name} {...data}/>}
        pageInput
      />
    </>
  )
}