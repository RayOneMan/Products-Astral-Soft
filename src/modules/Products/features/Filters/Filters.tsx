import React from "react";
import type { IFiltersProps } from "./Filters.types";
import { TypeSelect } from "src/modules/Products/features/TypeSelect/TypeSelect";
import { SearchInput } from "src/modules/Products/features/Search/Search";
import "./Filters.css";

export const Filters: React.FC<IFiltersProps> = ({
  search,
  setSearch,
  typeId,
  setTypeId,
  types,
  loadingTypes,
}) => {
  return (
    <div className="filter_container">
      <SearchInput value={search} onChange={setSearch} />
      <TypeSelect value={typeId} onChange={setTypeId} types={types} loading={loadingTypes} />
    </div>
  );
};
