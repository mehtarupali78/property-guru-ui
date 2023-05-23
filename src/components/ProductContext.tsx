import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { fetchProductCategory, fetchProducts } from "../service/productService";
import { ICotegory, IProduct } from "../interface";

type ProductContextType = {
  category: ICotegory[];
  products: IProduct[];
  filter: string | undefined;
  searchKey: string | undefined;
  setFilter: Dispatch<React.SetStateAction<string | undefined>>;
  setSearchKey: Dispatch<React.SetStateAction<string | undefined>>;
};

const ProductContext = createContext<ProductContextType>({
  products: [],
  category: [],
  filter: "",
  searchKey: "",
  setFilter: () => undefined,
  setSearchKey: () => undefined,
});

export function ChatProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [searchKey, setSearchKey] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const categoryRes = await fetchProductCategory();
        const productRes = await fetchProducts(searchKey, filter);
        setCategory(categoryRes);
        setProducts(productRes);
      } catch (err) {
        throw err;
      }
    };
    getProducts();
  }, [searchKey, filter]);

  const providerValue: ProductContextType = {
    category,
    products,
    filter,
    searchKey,
    setFilter,
    setSearchKey,
  };
  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
