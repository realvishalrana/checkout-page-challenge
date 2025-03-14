import ProductIndex from "./Product";
import type { ProductType } from "~/types";
import OrderSummary from "./OrderSummary";
import FilterProduct from "./FilterProduct";
import useProductList from "~/hooks/useProductList";

const ProductList = () => {
  const { productList, setProductList, filter, setFilter } = useProductList();
  const length = productList.length;

  return (
    <div className="space-y-6">
      <FilterProduct filter={filter} setFilter={setFilter} />
      <div className="space-y-4">
        {productList.map((product: ProductType, index: number) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <ProductIndex
              product={product}
              index={index}
              productLength={length}
              setProductList={setProductList}
            />
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <OrderSummary productList={productList} />
      </div>
    </div>
  );
};

export default ProductList;
