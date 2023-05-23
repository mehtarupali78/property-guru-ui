import axios from "axios";

// fetch all product category
export const fetchProductCategory = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_END_POINT}/product-category/all`
    );
    return response.data.data;
  } catch (error) {
    throw Error(`Error ${error}`);
  }
};

// fetch products
export const fetchProducts = async (
  name: string | undefined,
  category: string | undefined
) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_END_POINT}/products/all`,
      {
        params: {
          name,
          category,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    throw Error(`Error ${error}`);
  }
};

export const fetchReviewsByProductId = async (productId: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_END_POINT}/product-review/reviews`,
      {
        params: {
          id: productId,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    throw Error(`Error ${error}`);
  }
};
