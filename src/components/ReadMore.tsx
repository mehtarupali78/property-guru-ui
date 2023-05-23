import { useState } from "react";

const ReadMore = (props: { description: string }) => {
  const { description } = props;
  const [showFullDescription, setFullDescription] = useState(false);

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };

  return (
    <div>
      {showFullDescription ? description : description.slice(0, 40)}{" "}
      <button
        className=" underline text-blue-700"
        onClick={showFullDescriptionHandler}
      >
        Read {showFullDescription ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ReadMore;
