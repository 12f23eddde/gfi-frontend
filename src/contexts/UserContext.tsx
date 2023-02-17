import React, {createContext, useEffect, useState} from 'react';
import type {SetStateAction, Dispatch} from 'react';
import type {UserGithubProfile} from '../api/gfibot.d';
import Cookies from 'js-cookie';
import {globalWrappers} from '../common/wrapper';

const USERINFO_LOCALSTORE_KEY = 'user_info';
const LOGIN_COOKIE_KEY = 'x_github_login';
const TOKEN_COOKIE_KEY = 'x_github_token';
const TOKEN_EXPIRE_DAYS = 7;

export type UserInfoType = {
  userAvatarUrl: string,
  userName: string,
  userId: number,
}

export type UserContextType = {
  userInfo: UserInfoType | null,
  setUserInfo: Dispatch<SetStateAction<UserInfoType | null>>
  loginToGfibot: (params: UserGithubProfile) => void
  logoutFromGfibot: () => void
}

export const setGithubCookies = (params: UserGithubProfile) => {
  Cookies.set('x_github_login', params.github_login, {expires: TOKEN_EXPIRE_DAYS});
  Cookies.set('x_github_token', params.github_token, {expires: TOKEN_EXPIRE_DAYS});
};

export const removeGithubCookies = () => {
  Cookies.remove('x_github_id');
  Cookies.remove('x_github_token');
};

export const UserContext = createContext<UserContextType>({
  userInfo: {userName: 'Out of Context', userAvatarUrl: 'https://out.of.context', userId: -1},
  setUserInfo: s => s,
  loginToGfibot: s => {
  },
  logoutFromGfibot: () => {
  },
})

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  // load userInfo on mount
  useEffect(() => {
    const loginFromCookie = Cookies.get(LOGIN_COOKIE_KEY);
    const tokenFromCookie = Cookies.get(TOKEN_COOKIE_KEY);
    if (loginFromCookie && tokenFromCookie) {
      const userInfoFromLocalStore = localStorage.getItem(USERINFO_LOCALSTORE_KEY);
      if (userInfoFromLocalStore) {
        setUserInfo(JSON.parse(userInfoFromLocalStore));
      }
    }
  }, []);

  const loginToGfibot = (params: UserGithubProfile) => {
    setGithubCookies(params);
    const newUserInfo = {
      userAvatarUrl: params.github_avatar_url,
      userName: params.github_name,
      userId: params.github_id
    }
    localStorage.setItem(USERINFO_LOCALSTORE_KEY, JSON.stringify(newUserInfo));
    setUserInfo(newUserInfo);
  }

  const logoutFromGfibot = () => {
    // clear cookies
    removeGithubCookies();
    // clear local storage
    localStorage.removeItem(USERINFO_LOCALSTORE_KEY);
    // clear userInfo
    setUserInfo(null);
  }

  return (
    <UserContext.Provider value={{userInfo, setUserInfo, loginToGfibot, logoutFromGfibot}}>
      {children}
    </UserContext.Provider>
  )
}

globalWrappers.push(UserContextProvider);
