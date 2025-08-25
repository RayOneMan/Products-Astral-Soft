import { useProductTypes } from "./hooks/useProductTypes";

export const useLogic = () => {
  const { types, loading } = useProductTypes();

  return {
    types,
    loadingTypes: loading,
  };
};
