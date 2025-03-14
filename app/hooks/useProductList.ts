import axios from "axios";
import { useEffect, useState } from "react";
import type { ProductType } from "~/types";

const useProductList = () => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [filter, setFilter] = useState({
    type: "",
    category: "",
  });
  
  // Fetch the entire JSON data
  const getProductList = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_APP_API);
      // Map the data to add any extra properties you need
      const products = res.data.map((p: ProductType) => ({
        ...p,
        currentQuantity: 0,
        totalPrice: 0,
      }));

      // Filter the products on the client side
      const filteredProducts = products.filter((product: ProductType) => {
        const typeMatches = filter.type ? product.type === filter.type : true;
        const categoryMatches = filter.category ? product.category === filter.category : true;
        return typeMatches && categoryMatches;
      });

      setProductList(filteredProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductList();
  }, [filter]);

  return {
    productList,
    setProductList,
    filter,
    setFilter,
  };
};

export default useProductList;
