export interface IProduct {
  _id: string;
  image: string;
  description: string;
  price: number;
  name: string;
  brand: string;
  size: string;
  launchDate: Date;
  weight: string;
}

export interface ICotegory {
  _id: string;
  name: string;
}

export interface IReviews {
  _id: string;
  author: string;
  rating: number;
  description: string;
  date: Date;
}
