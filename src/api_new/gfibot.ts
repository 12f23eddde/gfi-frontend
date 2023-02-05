import { requestGFI, getBaseURL, requestGFIPaginated } from './request';
import { userInfo } from '../storage';

import type * as gfi from './gfibot.d';

export const getRepoLanguages = async () => (
  await requestGFI<string[]>({
    url: '/api/repos/languages'
  }
  ));

export const getRepoCount = async (
  params: {
    language?: string[]
  }) => (
  await requestGFI<number>({
    url: '/api/repos/count',
    params
  })
);

export const getRepoCountMock = 1000;

export const getRepoPaged = async (
  params: {
    start?: number,
    limit?: number,
    language?: string[],
    sort?: string
  }) => (
  await requestGFIPaginated<gfi.RepoDetail>({
    url: '/api/repos/list',
    params
  })
);

export const searchRepoPaged = async (
  params: {
    query: string,
    start?: number,
    limit?: number
  }) => (
  await requestGFIPaginated<gfi.RepoDetail>({
    url: '/api/repos/search',
    params
  })
);

/**
 * Get repo dynamics on owner/name (leave owner&name blank for global dynamics)
 */
export const getRepoDynamics = async (
  params: {
    name?: string,
    owner?: string,
  }) => (
  await requestGFI<gfi.RepoDynamics>({
    url: '/api/repos/dynamics',
    params
  })
);

export const getIssueCount = async (
  params: {
    name: string,
    owner: string,
    option?: 'gfis'
  }) => (
  await requestGFI<number>({
    url: '/api/issues/count',
    params
  })
);

export const getIssuePaged = async (
  params: {
    name: string,
    owner: string,
    start?: number,
    limit?: number,
    option?: 'gfis'
    sort?: gfi.GFIBrief
  }) => (
  await requestGFIPaginated<gfi.GFIBrief>({
    url: '/api/issues/list',
    params
  })
);

export const getGithubOauthURL = async () => (
  await requestGFI<string>({
    url: '/api/github/login'
  })
);

export const getUserRepoList = async () => (
  await requestGFI<gfi.UserRepo[]>({
    url: '/api/user/repos'
  })
);

export const addUserRepo = async (
  { owner, name }: { owner: string, name: string }
) => (
  await requestGFI<string>({
    url: `/api/user/repos/${owner}/${name}`,
    method: 'POST'
  })
);

export const deleteUserRepo = async (
  { owner, name }: { owner: string, name: string }
) => (
  await requestGFI<string>({
    url: `/api/user/repos/${owner}/${name}`,
    method: 'DELETE'
  })
);

export const getUserRepoConfig = async (
  { owner, name }: { owner: string, name: string }
) => (
  await requestGFI<gfi.UserRepoConfig>({
    url: `/api/user/repos/${owner}/${name}/config`
  })
);


export const updateUserRepoConfig = async (
  { owner, name, config }: {
    owner: string,
    name: string,
    config: gfi.UserRepoConfig
  }) => (
  await requestGFI<string>({
    url: `/api/user/repos/${owner}/${name}/config`,
    method: 'PUT',
    data: config
  })
);


export const getRecommendedRepoConfig = async (
  { owner, name, newcomer_percentage, gfi_percentage }: {
    owner: string,
    name: string,
    newcomer_percentage?: number,
    gfi_percentage?: number
  }) => (
  await requestGFI<gfi.UserRepoConfig>({
    url: `/api/user/repos/${owner}/${name}/config/recommended`,
    params: {
      newcomer_percentage,
      gfi_percentage
    }
  })
);

export const forceUpdateRepo = async (
  { owner, name }: { owner: string, name: string }
) => (
  await requestGFI<string>({
    url: `/api/user/repos/${owner}/${name}/actions/update`,
    method: 'PUT'
  })
);

export const forceLabelIssues = async (
  { owner, name }: { owner: string, name: string }
) => (
  await requestGFI<string>({
    url: `/api/user/repos/${owner}/${name}/actions/label`,
    method: 'PUT'
  })
);

export const getUserSearchHistory = async (params: { limit?: number }) => (
  await requestGFI<string[]>({
    url: '/api/user/search/searches',
    params
  })
);

export const getUserSearchRepos = async (params: { limit?: number }) => (
  await requestGFI<gfi.UserSearchedRepo[]>({
    url: '/api/user/search/history',
    params
  })
);

export const deleteUserSearchRepo = async (params: { id: string }) => (
  await requestGFI<string>({
    url: '/api/user/search/history',
    method: 'DELETE',
    params
  })
);


export const getModelFeatureWeights = async () => (
  await requestGFI<{ [key: string]: number }>({
    url: '/api/model/features'
  })
);

export const getIssueDataset = async (params: {
  name: string,
  owner: string,
  number: number
}) => (
  await requestGFI<{ [key: string]: any }>({
    url: '/api/issues/dataset',
    params
  })
);

/**
 * Get model performance on owner/name (leave owner&name blank for global perf)
 */
export const getModelPerformance = async (params: {
  name?: string,
  owner?: string,
}) => (
  await requestGFI<gfi.TrainingResult>({
    url: '/api/model/performance',
    params
  })
);