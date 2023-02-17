import React, {createContext, useContext, useEffect, useState} from 'react';
import {globalWrappers} from '../common/wrapper';

const WindowContext = createContext<{ width: number; height: number }>(
  {} as any
);
export const WindowContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <WindowContext.Provider value={{width, height}}>
      {children}
    </WindowContext.Provider>
  );
};
export const useWindowSize = () => {
  const {width, height} = useContext(WindowContext);
  return {width, height};
};
export const mobileThreshold = 700;
export const useIsMobile = () => {
  const {width} = useContext(WindowContext);
  return width <= mobileThreshold;
};

globalWrappers.push(WindowContextProvider);