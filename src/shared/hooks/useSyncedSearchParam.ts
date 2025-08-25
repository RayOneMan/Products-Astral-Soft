import { useEffect, useState } from "react";
import { searchParamSources } from "src/data/sources/searchParamSources";

export const useSyncedSearchParam = (key: string) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const paramValue = searchParamSources.getSearchParam(key);
    if (paramValue) {
      setValue(paramValue);
    }
  }, [key]);

  useEffect(() => {
    searchParamSources.setSearchParam(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};
