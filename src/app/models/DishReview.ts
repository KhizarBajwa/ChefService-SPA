import { Dish } from "./Dish";

export class DishReview {
  rating: number | undefined;
  review: string | undefined;
  reviewByUserId: string | undefined;
  dishId: number | undefined;
  dish: Dish | undefined;
}
