import { productSources } from "../sources/productSources";

export const productRepository = async (typeId?: string | null) => {
  let products = await productSources();

  if (typeId) {
    products = products.filter((p) => p.typeId === Number(typeId));
  }

  return products;
};
