import { useNavigate, useParams } from "react-router-dom";
import ProductContext from "../components/ProductContext";
import { useContext, useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { fetchReviewsByProductId } from "../service/productService";
import { FaArrowLeft } from "react-icons/fa";
import Ratings from "../components/Rating";
import { IProduct, IReviews } from "../interface";
import ReviewContainer from "../components/ReviewContainer";

const ProdductDetails = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState<IProduct>();
  const [reviews, setReviews] = useState<IReviews[]>();
  const [rating, setRating] = useState<number | undefined>(undefined);

  useEffect(() => {
    const productfilter = () => {
      const _product = products.filter((_prod: IProduct) => _prod._id === id);
      setProduct(_product[0]);
    };
    productfilter();
  }, [products, id]);

  useEffect(() => {
    if (product) {
      const returnRatingValue = async () => {
        const reviewRes = await fetchReviewsByProductId(product._id);
        returnTotalRating(reviewRes);
        setReviews(reviewRes);
      };
      returnRatingValue();
    }
  }, [product]);

  const returnTotalRating = (_reviews: IReviews[]) => {
    let count = 1;
    let rating = 0;
    for (let review of _reviews) {
      rating = rating + review.rating;
      count++;
    }
    const total = Math.round(rating / count);
    setRating(total);
  };

  const returnDate = (date: Date) => {
    const _date = new Date(date);
    return _date.toDateString();
  };

  return product ? (
    <div className="p-4">
      <Typography variant="h4" className="text-start py-3 flex">
        <span className="pt-1 pr-3 cursor-pointer">
          <FaArrowLeft onClick={() => navigation("/")} />
        </span>{" "}
        {product.name}
      </Typography>
      <div className="w-full flex">
        <div className="w-[40%] ">
          <img src={product.image} alt="" className="h-30" />
        </div>
        <div className="pl-6 w-[60%] h-6 text-start pr-20">
          <div className="font-bold">
            {product.name} - {product.brand}
          </div>
          <div>{rating && <Ratings value={rating} />}</div>

          <div className="underline">$ {product.price}</div>
          <div>
            <span className=" font-semibold">size -</span>
            <span> {product.size}</span>
          </div>
          <div>
            <span className=" font-semibold">Launch Date -</span>{" "}
            <span>{returnDate(product.launchDate)}</span>
          </div>
          <div>
            <span className=" font-semibold">Weight - </span>
            <span>{product.weight}</span>
          </div>
          <div>{product.description}</div>
        </div>
      </div>
      <ReviewContainer reviews={reviews} returnDate={returnDate} />
      {/* <div className="text-start pt-4">
        <Typography variant="h4">Reviews</Typography>
        {reviews && reviews.length ? (
          reviews.map((review: IReviews, index: number) => (
            <div key={index} className="flex flex-col gap-6 py-5">
              <div className="flex items-center gap-4">
                <Avatar
                  className=" border-solid border-2 border-black"
                  src="https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-120.jpg?w=360"
                  alt="avatar"
                />
                <div className="text-start">
                  <Typography variant="h6">{review.author}</Typography>
                  <Typography variant="small">
                    {returnDate(review.date)}
                  </Typography>
                  <Ratings value={Math.round(review.rating)} />
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {review.description}
                  </Typography>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Reviews</div>
        )}
      </div> */}
    </div>
  ) : (
    <div>product not found</div>
  );
};
export default ProdductDetails;
