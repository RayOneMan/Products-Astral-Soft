import { useState } from "react";
import { ProductList } from "src/modules/Products/features/ProductList/ProductList";
import { Filters } from "src/modules/Products/features/Filters/Filters";
import { useSyncedSearchParam } from "../../shared/hooks/useSyncedSearchParam";
import { useLogic } from "./useLogic/useLogic";
import "./Products.css";

export const Products: React.FC = () => {
  const [search, setSearch] = useState("");
  const [typeId, setTypeId] = useSyncedSearchParam("typeId");
  const { types, loadingTypes } = useLogic();

  return (
    <div className="products_container">
      <Filters
        search={search}
        setSearch={setSearch}
        typeId={typeId}
        setTypeId={setTypeId}
        types={types}
        loadingTypes={loadingTypes}
      />
      <ProductList types={types} typeId={typeId} search={search} />
    </div>
  );
};
