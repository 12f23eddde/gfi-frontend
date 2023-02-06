import React, {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

const context = createContext<{ width: number; height: number }>(
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
    <context.Provider value={{ width, height }}>
      {children}
    </context.Provider>
  );
};

export const useWindowSize = () => {
  const { width, height } = useContext(context);
  return { width, height };
};

export const mobileThreshold = 700;

export const useIsMobile = () => {
  const { width } = useContext(context);
  return width <= mobileThreshold;
};

const GlobalRefContext = createContext<{ ref: RefObject<HTMLDivElement> }>(
  {} as any
);

export const GlobalRefProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <GlobalRefContext.Provider value={{ ref }}>
      <div ref={ref}>{children}</div>
    </GlobalRefContext.Provider>
  );
};

export const useGlobalRef = () => {
  const { ref } = useContext(GlobalRefContext);
  return ref;
};

export const useData = <T, >(
  { promise, params, deps = [] }:
    {
      promise: (params: unknown) => Promise<T>;
      params?: unknown;
      deps?: unknown[];
    }
): T | null => {
  const [data, setData] = useState<T>(null);

  useEffect(() => {
    let ignore = false;
    promise(params)
      .then((data) => {
        if (!ignore) {
          setData(data);
        }
      });
    return () => {
      ignore = true;
    };
  }, [promise, params, ...deps]);

  return data;
};