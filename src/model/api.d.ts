export type GFIResponse<T> = {
  code?: number;
  result: T;
};

export type GFIFailure = {
  detail: string | ValidationError[];
};

/** FastAPI Validation Error */
export type ValidationError = {
  /** Location */
  loc: (Partial<string> & Partial<number>)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
};

/** Repo Info */
export interface RepoBrief {
  name: string;
  owner: string;
  description?: string;
  language?: string;
  topics: string[];
}

type MonthlyCount = {
  /** ISO datestring */
  month: string;
  /** Number of * in the month */
  count: number;
};

export type RepoDynamics = {
  name: string;
  owner: string;
  monthly_commits: Array<MonthlyCount>;
  monthly_issues: Array<MonthlyCount>;
  monthly_pulls: Array<MonthlyCount>;
};

/** Repo Info (with monthly stats) */
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

/** supported sort */
export type RepoSort =
  | 'popularity'
  | 'gfis'
  | 'median_issue_resolve_time'
  | 'newcomer_friendly';

export type UserQueryHistory = {
  /** number of queries in total */
  nums: number;
  /** pending queries */
  queries: RepoBrief[];
  /** finished queries */
  finished_queries: RepoBrief[];
};

export type GFIInfo = {
  name: string;
  owner: string;
  probability: number;
  number: number;
  /** ISO datestring */
  last_updated: string;
  title?: string;
  state?: 'closed' | 'open' | 'resolved';
};

export type GFITrainingSummary = {
  name: string;
  owner: string;
  issues_train: number;
  issues_test: number;
  n_resolved_issues: number;
  n_newcomer_resolved: number;
  last_updated: string;
  /** performance metrics are not available during training */
  accuracy?: number;
  auc?: number;
};

export type RepoGFIConfig = {
  newcomer_threshold: number;
  gfi_threshold: number;
  need_comment: boolean;
  issue_tag: string;
};

export type RepoUpdateConfig = {
  task_id: string | null;
  interval: number;
  begin_time: string;
};

export type RepoConfig = {
  update_config: RepoUpdateConfig;
  repo_config: RepoGFIConfig;
};

export type SearchedRepo = {
  name: string;
  owner: string;
  created_at: string;
  increment: number;
};
