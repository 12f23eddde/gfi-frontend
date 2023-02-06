import React, { ChangeEvent, useCallback } from 'react';
import { Col, Container, Form, Pagination, Row } from 'react-bootstrap';

export interface GFIPaginationProps {
  maxPagingCount: number;
  pageNums: number;
  pageIdx: number;
  onPageBtnClicked?: () => void;
  toPage: (page: number) => void;
  needInputArea?: boolean;
  onFormInput?: (target: EventTarget) => void;
  needPadding?: boolean;
  className?: string;
}

export function GFIPagination(props: GFIPaginationProps) {
  const { maxPagingCount, toPage, pageIdx, pageNums, needPadding, className } =
    props;

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

  const toLastPage = () => {
    toPage(pageNums);
  };

  const toNextPage = () => {
    if (pageIdx === pageNums) {
      return;
    }
    if (pageIdx === pageNums - 1) {
      toLastPage();
    } else {
      toPage(pageIdx + 1);
    }
  };

  const calRenderRange = (pageNum: number, selectedIdx: number) => {
    const pageArray: number[] = [];
    let idx = Math.max(selectedIdx - maxPagingCount + 2, 1);
    for (let i = 0; i < maxPagingCount; i += 1, idx += 1) {
      pageArray.push(idx);
      if (idx + 1 > pageNum) {
        break;
      }
    }
    return pageArray;
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

  return (
    <Container
      style={
        needPadding
          ? { overflow: 'hidden' }
          : { overflow: 'hidden', padding: '0' }
      }
      className={className}
    >
      <Row style={{ marginTop: '10px' }}>
        <Form.Group>
          <Col sm={8} style={{ float: 'left' }}>
            <Pagination style={{ margin: '0 auto' }}>
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
          {props.needInputArea && (
            <Col sm={4} style={{ float: 'right' }}>
              <Form.Label
                style={{
                  maxWidth: '80px',
                  float: 'right'
                }}
              >
                <Form.Control
                  placeholder={`${props.pageIdx}/${props.pageNums}`}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    props.onFormInput && props.onFormInput(e.target);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && props.onPageBtnClicked) {
                      e.preventDefault();
                      props.onPageBtnClicked();
                    }
                  }}
                />
              </Form.Label>
            </Col>
          )}
        </Form.Group>
      </Row>
    </Container>
  );
}