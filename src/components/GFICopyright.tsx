import { Col, Container, Row } from 'react-bootstrap';
import { defaultFontFamily } from '../utils';
import React from 'react';

export function GFICopyright() {
  const copyright =
    'Copyright © 2022 OSS Lab, Peking University. All rights reserved.';

  return (
    <Container
      style={{
        paddingTop: '20px',
        paddingBottom: '10px',
        fontFamily: defaultFontFamily,
        fontSize: '15px',
        fontWeight: '100',
        position: 'sticky',
        top: '100vh'
      }}
    >
      <Row>
        <Col style={{ textAlign: 'center' }}>{copyright}</Col>
      </Row>
    </Container>
  );
}