import { Rating } from "@material-tailwind/react";

const Ratings = (props: { value: number | undefined }) => {
  const { value } = props;

  return <Rating count={5} value={value} color="yellow" readonly />;
};

export default Ratings;
