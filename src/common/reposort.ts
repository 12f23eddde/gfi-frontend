import {RepoSort} from '../api/gfibot.d'

const filterNames = {
  'popularity': 'Number of Stars',
  'median_issue_resolve_time': 'Issue Resolution Time',
  'newcomer_friendly': '% of Issues Resolved by New Contributors',
  'gfis': '# of Predicted Good First Issues'
};
const nameToFilter = Object.keys(filterNames).reduce((acc, cur) => {
  acc[filterNames[cur]] = cur;
  return acc;
}, {} as { [key: string]: string });
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