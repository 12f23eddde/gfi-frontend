// wraps context providers to avoid nesting hell
// attribute: @xmcp

import React from 'react';

// here's a global variable of all wrappers
export const globalWrappers: Array<React.FC<{ children: React.ReactNode }>> = [];

export const MultipleWrappers = ({
  wrappers,
  children,
}: {
  wrappers: Array<React.FC<{ children: React.ReactNode }>>;
  children: React.ReactNode;
}) => {
  let wrapped = children;
  wrappers.reverse().forEach((Wrapper) => {
    wrapped = <Wrapper>{wrapped}</Wrapper>;
  });
  return wrapped;
}