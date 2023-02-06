import { asyncRequest, RequestParams } from './request';
import { userInfo } from '../storage';
import {
  GitHubIssueResponse,
  GitHubRepoPermissions,
  GitHubHTTPResponse
} from './github.d';

export const requestGitHub = async <T>(params: RequestParams) => {
  // if token exists, add token to headers
  const { githubToken } = userInfo();
  if (githubToken) params.headers = { Authorization: `token ${githubToken}` };
  const res = await asyncRequest<GitHubHTTPResponse<T>>(params);
  if (!res) return undefined;
  if (res && !res.error) {
    return res.data ? res.data : res;
  } else if (typeof params.onError === 'function') {
    // normally when an error occurs, status code != 200
    // but in this case, we want to keep the compatibility
    params.onError(new Error(String(res.error)));
  }
  return undefined;
};

export const redirectToGitHubOAuth = async (
  { client_id, redirect_uri, scope, state }: {
    client_id: string,
    redirect_uri?: string,
    scope?: string,
    state?: string
  }) => {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.append('client_id', client_id);
  if (redirect_uri) url.searchParams.append('redirect_uri', redirect_uri);
  if (scope) url.searchParams.append('scope', scope);
  if (state) url.searchParams.append('state', state);
  // redirect to github oauth
  window.location.href = url.href;
};

export const checkGithubLogin = async () => {
  const { githubLogin, githubToken } = userInfo();
  if (githubToken) {
    const res = await requestGitHub<any>({
      url: `https://api.github.com/users/${githubLogin}`
    });
    if (res) return true;
  }
  return false;
};

/** User must have write access */
export const checkHasRepoPermissions = async (
  { name, owner }: { name: string, owner: string }
) => {
  const { hasLogin, githubToken } = userInfo();
  if (!hasLogin) return false;
  const res = await requestGitHub<{ permissions: GitHubRepoPermissions }>({
    url: `https://api.github.com/repos/${owner}/${name}`
  });
  if (!res || !res.permissions) return false;
  return (
    !!res.permissions.maintain ||
    !!res.permissions.admin ||
    !!res.permissions.push
  );
};

export const getIssueByRepoInfo = async (
  { name, owner, number }: { name: string, owner: string, number: number }
) => {
  // url such as https://api.github.com/repos/pallets/flask/issues/4333
  const url = `https://api.github.com/repos/${owner}/${name}/issues/${number}`;
  return await requestGitHub<Partial<GitHubIssueResponse>>({ url });
};
