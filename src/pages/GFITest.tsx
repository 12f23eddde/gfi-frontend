import React, {useState, useContext, useEffect} from 'react';
import {GFIToastContext} from '../components/GFIToast';

import {repoPagedMock} from '../api/gfibot.mock';

const repoMock = repoPagedMock.result[0];

type SimpleTrainInfoTagProp = {
  title: string,
  data: number,
}

/** A simple tag like [AUC|0.99] */
function SimpleDataTag({title, data}: SimpleTrainInfoTagProp) {
  return (
    <div
      className="simple-train-info-tag flex-row align-items-stretch"
      style={{marginRight: '0.4rem'}}
    >
      <div>{title}</div>
      <div>{data}</div>
    </div>
  );
}

function RepoDataPanel({repo}: { repo: typeof repoMock }) {
  return (
    <div className="repo-data-panel">
      <div className="flex-row align-items-stretch">
        <SimpleDataTag title={'AUC'} data={repo.auc}/>
        <SimpleDataTag title={'Accuracy'} data={repo.accuracy}/>
      </div>
    </div>
  );
}


export function GFITest() {
  const {addToast} = useContext(GFIToastContext);
  useEffect(() => {
    addToast({
      title: 'Hello You Mate!',
      text: 'Hello World!',
      closeDelay: 1000,
    })
    addToast({
      title: 'GoodBye You Mate!',
      text: 'Goodbye World!',
      closeDelay: -1,
    })
  }, [])
  return (
    <>
      <RepoDataPanel repo={repoMock}/>
    </>
  )
}