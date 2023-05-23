import { IProduct } from "../interface";
import ProductTile from "./ProductTile";

const ProductContainer = (props: { productList: IProduct[] }) => {
  const { productList } = props;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mb-4">
      {productList && productList.length ? (
        productList.map((product: IProduct, index: number) => (
          <ProductTile key={index} {...product} />
        ))
      ) : (
        <div className="text-white flex min-h-screen min-w-screen min-w-[100vw]">
          <div className="m-auto">No Products</div>
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
