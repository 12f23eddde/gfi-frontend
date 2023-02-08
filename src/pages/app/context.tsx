import React, {useEffect, useState} from 'react';

export const useData = <T, >(
  {promise, params, deps = []}:
    {
      promise: (params: unknown) => Promise<T | null>;
      params?: unknown;
      deps?: unknown[];
    }
) => {
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

  return data as T | null;
};