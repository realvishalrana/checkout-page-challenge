import axios from "axios";
import { useEffect, useState } from "react";
import type { ProductType } from "~/types";

const useProductList = () => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [filter, setFileter] = useState({
    type: "",
    category: "",
  });


  const getProductList = () => {
    let query = "http://localhost:3001/products?";
    if (filter.type) query += `type=${filter.type}&`;
    if (filter.category) query += `category=${filter.category}`;

    axios
      .get(query)
      .then((res) => {
        const productList = res.data.map((p: ProductType) => ({
          ...p,
          currentQuantity: 0,
          totalPrice: 0,
        }));

        setProductList(productList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductList();
  }, [filter]);

  return {
    productList,
    setProductList,
    filter,
    setFileter,
  };
};

export default useProductList;
