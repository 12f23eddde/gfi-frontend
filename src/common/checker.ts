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

// ↑ above shouldn't work with browsers
export const checkIsGitRepoURL = (val: string) => {
  return /((git|ssh|http(s)?)|(git@[\w.]+))(:(\/\/)?)([\w.@:/\-~]+)(\.git)?(\/)?/.test(
    val
  );
};

export const checkHasUndefinedProperty = (obj: any) => {
  for (const key in obj) {
    if (obj[key] === undefined) return true;
  }
  return false;
};

export const checkIsValidUrl = (url: string) => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};