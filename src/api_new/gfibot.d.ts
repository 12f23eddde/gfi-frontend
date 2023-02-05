export type GFIResponse<T> = {
  code?: number;
  result: T;
};

export type GFIPaginated<T> = {
  code?: number;
  result: Array<T>;
  total: number;
  current: number;
  size: number;
};

export type GFIFailure = {
  detail: string | ValidationError[];
};

export type ValidationError = {
  loc: (Partial<string> & Partial<number>)[];
  msg: string;
  type: string;
};

export type GFIBrief = {
  name: string;
  owner: string;
  number: number;
  threshold: number;
  probability: number;
  last_updated: string;
  created_at: string;
  closed_at?: string;
  state?: string;
  title?: string;
  labels?: Array<string>;
};

export enum GFISort {
  PROBABILITY = 'probability',
  _PROBABILITY = '-probability',
  CREATED_AT = 'created_at',
  _CREATED_AT = '-created_at',
}

export enum GFISort {
  PROBABILITY = 'probability',
  _PROBABILITY = '-probability',
  CREATED_AT = 'created_at',
  _CREATED_AT = '-created_at',
}

export type MonthlyCount = {
  month: string;
  count: number;
};

export type RepoDetail = {
  name: string;
  owner: string;
  description?: string;
  language?: string;
  topics: Array<string>;
  r_newcomer_resolved: number;
  n_stars: number;
  n_gfis: number;
  issue_close_time: number;
  accuracy?: number;
  auc?: number;
  last_updated: string;
};

export type RepoDynamics = {
  name: string;
  owner: string;
  monthly_commits: Array<MonthlyCount>;
  monthly_issues: Array<MonthlyCount>;
  monthly_pulls: Array<MonthlyCount>;
};

export enum RepoSort {
  NAME = 'name',
  _NAME = '-name',
  N_STARS = 'n_stars',
  _N_STARS = '-n_stars',
  N_GFIS = 'n_gfis',
  _N_GFIS = '-n_gfis',
  ISSUE_CLOSE_TIME = 'issue_close_time',
  _ISSUE_CLOSE_TIME = '-issue_close_time',
  R_NEWCOMER_RESOLVED = 'r_newcomer_resolved',
  _R_NEWCOMER_RESOLVED = '-r_newcomer_resolved',
}


export type TrainingResult = {
  owner: string;
  name: string;
  issues_train: number;
  issues_test: number;
  n_resolved_issues: number;
  n_newcomer_resolved: number;
  last_updated: string;
  auc?: number;
  accuracy?: number;
  precision?: number;
  recall?: number;
  f1?: number;
};

export enum UserRepoState {
  DONE = 'done',
  COLLECTING = 'collecting',
  TRAINING = 'training',
  ERROR = 'error',
}

export type UserRepo = {
  owner: string;
  name: string;
  state: UserRepoState;
};

export type UserRepoConfig = {
  update_cron: string;
  newcomer_threshold: number;
  gfi_threshold: number;
  need_comment: boolean;
  auto_label: boolean;
  issue_label: string;
  badge_prefix: string;
};

export type UserSearchedRepo = {
  id: string;
  name: string;
  owner: string;
  query: string;
  searched_at: string;
};

