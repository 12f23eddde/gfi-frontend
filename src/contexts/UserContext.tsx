import React, {createContext, useState} from 'react';
import type {SetStateAction, Dispatch} from 'react';

export type UserInfoType = {
  userAvatarUrl: string,
  userName: string,
}

export type UserContextType = {
  userInfo: UserInfoType | null,
  setUserInfo: Dispatch<SetStateAction<UserInfoType | null>>
}

export const UserContext = createContext<UserContextType>({
  userInfo: {userName: 'Out of Context', userAvatarUrl: 'https://out.of.context'},
  setUserInfo: s => s
})

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>();
  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  )
}