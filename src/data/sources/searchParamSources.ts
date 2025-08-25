export const searchParamSources = {
  getSearchParam: (key: string): string | null => {
    const params = new URLSearchParams(window.location.search);

    return params.get(key);
  },
  setSearchParam: (key: string, value: string | null) => {
    const params = new URLSearchParams(window.location.search);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  },
};
