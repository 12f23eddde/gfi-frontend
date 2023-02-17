import React, {createContext, useState} from 'react';
import type {SetStateAction, Dispatch,} from 'react';
import {globalWrappers} from '../common/wrapper';

import {getRepoLanguages} from '../api/gfibot';
import {useData} from '../api/useData';

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
  const languages = useData<string[]>({
    promise: getRepoLanguages,
    initial: []
  });
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>();
  return (
    <LanguageContext.Provider value={{languages, selectedLanguages, setSelectedLanguages}}>
      {children}
    </LanguageContext.Provider>
  )
}

globalWrappers.push(LanguageContextProvider);