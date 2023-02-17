import React, {createContext, RefObject, useContext, useRef} from 'react';

import {globalWrappers} from '../common/wrapper';

const GlobalRefContext = createContext<{ ref: RefObject<HTMLDivElement> }>(
  {} as any
);

export const useGlobalRef = () => {
  const {ref} = useContext(GlobalRefContext);
  return ref;
};

export const GlobalRefProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <GlobalRefContext.Provider value={{ref}}>
      <div ref={ref}>{children}</div>
    </GlobalRefContext.Provider>
  );
};

// register the context provider
globalWrappers.push(GlobalRefProvider);