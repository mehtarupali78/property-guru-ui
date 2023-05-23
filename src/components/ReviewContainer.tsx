import { Avatar, Typography } from "@material-tailwind/react";
import { IReviews } from "../interface";
import Ratings from "./Rating";

const ReviewContainer = (props: {
  reviews: IReviews[] | undefined;
  returnDate: (date: Date) => string;
}) => {
  const { reviews, returnDate } = props;
  return (
    <div className="text-start pt-4">
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
    </div>
  );
};

export default ReviewContainer;
