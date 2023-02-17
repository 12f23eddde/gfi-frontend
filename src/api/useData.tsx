import {useEffect, useState} from 'react';

export type UseDataHook<T> = {
  promise: (params: unknown) => Promise<T | null>;
  params?: unknown;
  deps?: unknown[];
  initial?: T | null,
}
export const useData = <T, >(
  {promise, params, deps = [], initial = null}: UseDataHook<T>,
) => {
  const [data, setData] = useState<T>(initial);

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

  return data as typeof initial | T;
};