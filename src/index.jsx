import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Helmet, HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter, Route} from 'react-router-dom';
import {CacheRoute, CacheSwitch} from 'react-router-cache-route';
import {AliveScope} from 'react-activation';

import {Container} from 'react-bootstrap';
import {DescriptionPage} from './pages/descriptionPage';
import {GFIHeader} from './components/GFIHeader';
import {Repositories} from './pages/repositories/repositories';

import {persistor, store} from './storage/configureStorage';
import reportWebVitals from './reportWebVitals';
import {MainPage} from './pages/main/MainPage';
import {LoginRedirect} from './pages/login';
import {GFIPortal} from './pages/portal/GFIPortal';
import {GFICopyright} from './components/GFICopyright';

import {GlobalRefProvider} from './contexts/GlobalRefContext';
import {WindowContextProvider} from './contexts/WindowContext';
import {LanguageContextProvider} from './contexts/LanguageContext';
import {UserContextProvider} from './contexts/UserContext';
import {GFIToastContextProvider} from './components/GFIToast';
import {GFITest} from './pages/GFITest';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet></Helmet>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GFIToastContextProvider>
            <WindowContextProvider>
              <GlobalRefProvider>
                <LanguageContextProvider>
                  <UserContextProvider>
                    <BrowserRouter>
                      <AliveScope>
                        <Container
                          fluid
                          className="no-gutters mx-0 px-0 main-container"
                        >
                          <GFIHeader/>
                          <CacheSwitch>
                            <CacheRoute exact path="/" component={MainPage}/>
                            <CacheRoute path="/home" component={DescriptionPage}/>
                            <CacheRoute path="/repos" component={Repositories}/>
                            <CacheRoute path="/portal" component={GFIPortal}/>
                            <Route path="/login/redirect" component={LoginRedirect}/>
                            <Route path="/test" component={GFITest}/>
                            <CacheRoute path="*" component={MainPage}/>
                          </CacheSwitch>
                          <GFICopyright/>
                        </Container>
                      </AliveScope>
                    </BrowserRouter>
                  </UserContextProvider>
                </LanguageContextProvider>
              </GlobalRefProvider>
            </WindowContextProvider>
          </GFIToastContextProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
