import { GFIRepoSearchingFilterType } from './pages/main/mainHeader';
import { RepoSort } from './model/api';

export const checkIsNumber = (val: string | number | undefined) => {
  const reg = /^\d+.?\d*/;
  if (typeof val === 'number') {
    val = val.toString();
  }
  if (val) {
    return reg.test(val);
  }
  return false;
};

export const checkIsPercentage = (val: string) => {
  return /^\d+(\.\d+)?%$/.test(val);
};

// export const checkIsGitRepoURL = (val: string) => {
//   const isGitUrl = require('is-git-url');
//   return isGitUrl(val);
// };

// ↑ above shouldn't work with browsers
export const checkIsGitRepoURL = (val: string) => {
  return /((git|ssh|http(s)?)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:/\-~]+)(\.git)?(\/)?/.test(
    val
  );
};

export const defaultFontFamily =
  '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif';

export const monospaceFontFamily = 'Consolas, monaco, monospace';

export const checkHasUndefinedProperty = (obj: any) => {
  for (const key in obj) {
    if (obj[key] === undefined) return true;
  }
  return false;
};

const repoFilters = [
  'popularity',
  'median_issue_resolve_time',
  'newcomer_friendly',
  'gfis',
];

const filterNames = {
  popularity: 'Popularity',
  median_issue_resolve_time: 'Median Issue Resolve Time',
  newcomer_friendly: 'Newcomer Friendliness',
  gfis: 'GFIs',
};

const nameToFilter = Object.fromEntries(
  Object.entries(filterNames).map(([k, v]) => [v, k])
);

/** convert semantic filter names -> backend args */
export const convertFilter = (s: string): RepoSort | undefined => {
  if (Object.keys(filterNames).includes(s)) {
    return s as RepoSort;
  } else if (Object.keys(nameToFilter).includes(s)) {
    return nameToFilter[s] as RepoSort;
  } else {
    console.error('invalid filter name', s, nameToFilter, filterNames);
    return undefined;
  }
};

export const checkIsValidUrl = (url: string) => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};
