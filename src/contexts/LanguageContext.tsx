import React, {createContext, useState} from 'react';
import type {SetStateAction, Dispatch,} from 'react';

import {useData} from '../pages/app/context';
import {getRepoLanguages} from '../api/gfibot';

export type LanguageContextType = {
  languages: string[] | null,
  // setLanguages: Dispatch<SetStateAction<string[]>>
  selectedLanguages: string[],
  setSelectedLanguages: Dispatch<SetStateAction<string[]>>
}

export const LanguageContext = createContext<LanguageContextType>({
  languages: ['Out', 'of', 'Context'],
  // setLanguages: s => s,
  selectedLanguages: ['Out', 'of', 'Context'],
  setSelectedLanguages: s => s
})

export const LanguageContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const _languages = useData<string[]>({
    promise: getRepoLanguages
  });
  const languages = _languages ? _languages : [];
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>();
  return (
    <LanguageContext.Provider value={{languages, selectedLanguages, setSelectedLanguages}}>
      {children}
    </LanguageContext.Provider>
  )
}