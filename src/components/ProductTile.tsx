import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../interface";
import ReadMore from "./ReadMore";

const ProductTile = (props: IProduct) => {
  const navigate = useNavigate();
  const { _id, image, description, price } = props;

  const imageErrorHandler = (
    event: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = `${process.env.PUBLIC_URL}/assets/images/placeholder_for_missing_posters.png`;
    event.currentTarget.className = "error";
  };

  const navigateToProductDetails = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <div className="flex flex-col w-full h-full px-[10px] sm:px-[10px] md:px-[15px] lg:px-[15px] xl:px-[15px] py-[15px] sm:py-[15px] md:py-[25px] lg:py-[35px]">
      <img
        onClick={() => navigateToProductDetails(_id)}
        src={image}
        alt=""
        onError={imageErrorHandler}
        className="h-[370px] cursor-pointer"
      />
      <div className="pt-3  text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px]">
        {/* {description} */}
        <ReadMore description={description} />
      </div>
      <div className="pt-3  text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] ">
        ${price}
      </div>
    </div>
  );
};
export default ProductTile;
