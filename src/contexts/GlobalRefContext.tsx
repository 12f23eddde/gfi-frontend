import React, {createContext, RefObject, useContext, useRef} from 'react';

const GlobalRefContext = createContext<{ ref: RefObject<HTMLDivElement> }>(
  {} as any
);
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
export const useGlobalRef = () => {
  const {ref} = useContext(GlobalRefContext);
  return ref;
};