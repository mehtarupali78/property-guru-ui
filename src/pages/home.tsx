import { useContext } from "react";
import ProductContainer from "../components/ProductContainer";
import Search from "../components/Search";

import ProductContext from "../components/ProductContext";

const Home = () => {
  const { products, searchKey, setSearchKey } = useContext(ProductContext);

  return (
    <div className="p-[15px]">
      <Search searchKey={searchKey} setSearchKey={setSearchKey} />
      <ProductContainer productList={products} />
    </div>
  );
};

export default Home;
