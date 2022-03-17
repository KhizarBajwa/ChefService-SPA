import { Category } from "./Category";
import { DishReview } from "./DishReview";

export class Dish {
  id: number | undefined;
  name: string | undefined;
  author: string | undefined;
  description: string | undefined;
  dishPic: string | undefined;
  orginalPrice: number | undefined;
  discountedPrice: number | undefined;
  isInStock: boolean | undefined;
  publishDate: any | undefined;
  categoryId: number | undefined;
  // category: Category | undefined;
  // dishReviews: DishReview[] | undefined;
}


