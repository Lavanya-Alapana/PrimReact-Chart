import { useQuery } from "@tanstack/react-query";
import { getcartItems, getProducts } from "../api/productApi";

export const useProductsChart = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};


export const useCartItems=()=>{
  return useQuery({
    queryKey:["carts"],
    queryFn:getcartItems
  })
}