import React, { useState } from 'react';

export function GFISimplePagination(props: {
  nums: number;
  onClick: (idx: number) => void;
  title?: string[];
}) {
  const { nums, onClick, title } = props;
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  let showTitle = '';
  let shouldShowTitle = false;
  if (title && title.length === nums) {
    showTitle = '-title';
    shouldShowTitle = true;
  }

  const render = () => {
    const List = [];
    for (let i = 0; i < nums; i++) {
      List.push(i);
    }
    return List.map((i, idx) => {
      const isSelected = idx === selectedIdx ? 'page-selected' : '';
      const idRandom = Math.random() * 1000;
      return (
        <div
          key={`simple-pagination-item-${title}-${idx}-${idRandom}`}
          className={`simple-pagination-item${showTitle} ${isSelected} hoverable`}
          onClick={() => {
            if (idx !== selectedIdx) {
              setSelectedIdx(idx);
              onClick(idx);
            }
          }}
        >
          {shouldShowTitle && title && title[idx]}
        </div>
      );
    });
  };

  return (
    <div className="simple-pagination flex-row align-center justify-content-between">
      {render()}
    </div>
  );
}
