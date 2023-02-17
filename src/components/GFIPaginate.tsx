import React, {ChangeEvent, useCallback, useState} from 'react';
import {Col, Container, Form, ListGroup, Pagination, Row} from 'react-bootstrap';

import type {GFIPaginated} from '../api/gfibot.d'
import {useData, UseDataHook} from '../api/useData';
import {checkIsNumber} from '../common/checker';
import {nanoid} from 'nanoid';

interface GFIPaginateProps<T> {
  useDataParams: UseDataHook<GFIPaginated<T>>
  initialPageSize?: number;
  pageInput?: boolean;
  zeroPadding?: boolean;
  className?: string;
  children: (data: T) => React.ReactNode;
}

export function GFIPaginate<T>({
  useDataParams,
  initialPageSize = 5,
  pageInput = false,
  zeroPadding = false,
  className = '',
  children,
}: GFIPaginateProps<T>) {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(initialPageSize);
  const [formInput, setFormInput] = useState('');

  const useDataParamsWithLimit = {
    ...useDataParams,
    start,
    limit,
  }
  const data = useData(useDataParamsWithLimit);

  const total = data.total;
  const pageIdx = Math.floor(start / limit) + 1;
  const pageNums = Math.ceil(total / limit);

  const setLimitAndResetStart = useCallback((newLimit: number) => {
    setStart(0);
    setLimit(newLimit);
  }, []);

  const toPage = useCallback((page: number) => {
    // check page is valid
    if (page < 1 || page > pageNums) {
      return;
    }
    setStart((page - 1) * limit);
  }, [limit, pageNums]);

  const toFirstPage = useCallback(() => {
    toPage(1);
  }, [toPage]);

  const toPrevPage = useCallback(() => {
    if (pageIdx === 1) {
      toFirstPage();
    } else {
      toPage(pageIdx - 1);
    }
  }, [pageIdx, toPage, toFirstPage]);

  const toNextPage = useCallback(() => {
    if (pageIdx === pageNums) {
      return;
    }
    if (pageIdx === pageNums - 1) {
      toPage(pageNums);
    } else {
      toPage(pageIdx + 1);
    }
  },
  [pageIdx, toPage, pageNums]);

  const onFormInput = (target: EventTarget) => {
    const t = target as HTMLTextAreaElement;
    setFormInput(t.value);
  };

  const onPageBtnClicked = () => {
    if (checkIsNumber(formInput)) {
      const pageInput = parseInt(formInput);
      if (pageInput > 0 && pageInput <= pageNums) {
        toPage(pageInput);
      } else {
        window.alert(`Out of page index, max page number is ${pageNums}`);
      }
    } else {
      window.alert('Please input a number');
    }
  };

  const calRenderRange = (pageNum: number, selectedIdx: number) => {
    const pageArray: number[] = [];
    let idx = Math.max(selectedIdx - limit + 2, 1);
    for (let i = 0; i < limit; i += 1, idx += 1) {
      pageArray.push(idx);
      if (idx + 1 > pageNum) {
        break;
      }
    }
    return pageArray;
  };

  const renderExpPagingItem = (pageNum: number, shotDot: boolean) => {
    let msg: string = pageNum.toString();
    if (shotDot) {
      msg = `.. ${pageNum}`;
    }
    return (
      <Pagination.Item key={pageNum} onClick={() => toPage(pageNum)}>
        {' '}
        {msg}{' '}
      </Pagination.Item>
    );
  };

  const renderPagingItem = (pageNum: number, selectedIdx: number) => {
    const pageArray = calRenderRange(pageNum, selectedIdx);
    const renderedArray = pageArray.map((ele, idx) => {
      return (
        <Pagination.Item
          key={ele}
          active={ele === selectedIdx}
          onClick={() => toPage(ele)}
        >
          {' '}
          {ele}{' '}
        </Pagination.Item>
      );
    });

    if (!pageArray.includes(1)) {
      const showDot = !pageArray.includes(2);
      renderedArray.unshift(renderExpPagingItem(1, showDot));
    }
    if (!pageArray.includes(pageNums) && pageNums) {
      const showDot = !pageArray.includes(pageNums - 1);
      renderedArray.push(renderExpPagingItem(pageNums, showDot));
    }

    return renderedArray;
  };

  return (
    <>
      <Row>
        <Col>
          <ListGroup
            style={{
              marginBottom: '10px'
            }}
          >
            {data.result.map((ele) => (
              <ListGroup.Item key={nanoid(10)}>{children(ele)}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Container
          style={
            zeroPadding
              ? {overflow: 'hidden', padding: '0'}
              : {overflow: 'hidden'}
          }
          className={className}
        >
          <Row style={{marginTop: '10px'}}>
            <Form.Group>
              <Col sm={8} style={{float: 'left'}}>
                <Pagination style={{margin: '0 auto'}}>
                  <Pagination.Prev
                    onClick={() => {
                      toPrevPage();
                    }}
                  />
                  {renderPagingItem(pageNums, pageIdx)}
                  <Pagination.Next
                    onClick={() => {
                      toNextPage();
                    }}
                  />
                </Pagination>
              </Col>
              {pageInput && (
                <Col sm={4} style={{float: 'right'}}>
                  <Form.Label
                    style={{
                      maxWidth: '80px',
                      float: 'right'
                    }}
                  >
                    <Form.Control
                      placeholder={`${pageIdx}/${pageNums}`}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        onFormInput && onFormInput(e.target);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && onPageBtnClicked) {
                          e.preventDefault();
                          onPageBtnClicked();
                        }
                      }}
                    />
                  </Form.Label>
                </Col>
              )}
            </Form.Group>
          </Row>
        </Container>
      </Row>
    </>
  );
}
