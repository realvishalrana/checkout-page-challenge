import type { ProductType } from "~/types";

type ProductListProps = {
  productLength: number;
  product: ProductType;
  index: number;
  setProductList: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const Product = ({
  productLength,
  product,
  index,
  setProductList,
}: ProductListProps) => {
  const handleRemoveProduct = () => {
    setProductList((prevProducts) =>
      prevProducts.filter((p) => p.id !== product.id)
    );
  };

  const addQuantity = () => {
    const newQuantity = product.currentQuantity + 1;
    if (newQuantity > product.maxQuantity) return;
    const updatedProduct = {
      ...product,
      currentQuantity: newQuantity,
      totalPrice: product.price * newQuantity,
    };

    setProductList((prevProducts) =>
      prevProducts.map((p) => (p.id === product.id ? updatedProduct : p))
    );
  };

  const removeQuantity = () => {
    if (product.currentQuantity === 0) return;
    const newQuantity = product.currentQuantity - 1;
    const updatedProduct = {
      ...product,
      currentQuantity: newQuantity,
      totalPrice: product.price * newQuantity,
    };

    setProductList((prevProducts) =>
      prevProducts.map((p) => (p.id === product.id ? updatedProduct : p))
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="h-20 w-20 bg-gray-100 rounded-md flex items-center justify-center">
          <img
            src={product.image}
            alt="Product Image"
            className="object-contain h-full w-full"
          />
        </div>

        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row gap-2 justify-between">
            <h3 className="font-medium text-lg">{product.name}</h3>
            <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
              <span>Available: {product.maxQuantity}</span>
              <span>Type: {product.type}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">{product.category}</p>
          <div className="flex items-center mt-2 flex-wrap">
            <div className="flex items-center border rounded-md">
              <button
                className="h-8 w-8 flex items-center justify-center"
                onClick={removeQuantity}
              >
                -
              </button>
              <span className="w-8 text-center text-sm">
                {product.currentQuantity}
              </span>
              <button
                className="h-8 w-8 flex items-center justify-center"
                onClick={addQuantity}
              >
                +
              </button>
            </div>
            <button
              className="ml-4 text-sm text-blue-600 hover:underline mt-2 sm:mt-0"
              onClick={handleRemoveProduct}
            >
              Remove
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-right">
          <div className="font-medium flex justify-between gap-2">
            <span>Price</span>
            <span>${product.price.toFixed(2)}</span>
          </div>
          <div className="font-medium flex justify-between">
            <span>Total</span>
            <span>${product.totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {index < productLength - 1 && <div className="my-4 border-b"></div>}
    </>
  );
};

export default Product;
