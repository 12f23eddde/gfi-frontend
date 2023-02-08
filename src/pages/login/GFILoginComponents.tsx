import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import '../../style/gfiStyle.css';
import {defaultFontFamily} from '../../utils';
import {createLoginAction} from '../../storage/reducers';

export function LoginRedirect(props: any) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const loginName = params.get('github_login');
    const userName = params.get('github_name');
    const userUrl = params.get('github_avatar_url');
    const userId = params.get('github_id');
    const userToken = params.get('github_token');
    if (userId && loginName && userName && userToken && userUrl) {
      dispatch(
        createLoginAction(userId, loginName, userName, userToken, userUrl)
      );
      history.push('/', {justLogin: true});
    }
  }, []);

  return (
    <Container
      style={{
        textAlign: 'center',
        fontFamily: defaultFontFamily,
      }}
    >
      Redirecting...
    </Container>
  );
}

