import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../models/Dish';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DishService {
    private baseUrl: string = environment.baseUrl + 'api/';

    constructor(private http: HttpClient) { }

    public addDish(dish: Dish) {
        return this.http.post(this.baseUrl + 'dish', dish);
    }

    public updateDish(id: number, dish: Dish) {
        return this.http.put(this.baseUrl + 'dish/' + id, dish);
    }

    public getDish(): Observable<Dish[]> {
        return this.http.get<Dish[]>(this.baseUrl + `dish`);
    }

    public deleteDish(id: number) {
        return this.http.delete(this.baseUrl + 'dish/' + id);
    }

    public getDishById(id: number): Observable<Dish> {
        return this.http.get<Dish>(this.baseUrl + 'dish/' + id);
    }

    public search(name: string): Observable<Dish[]> {
        return this.http.get<Dish[]>(`${this.baseUrl}dish/search/${name}`);
    }

    public searchDishesWithCategory(searchedValue: string): Observable<Dish[]> {
      return this.http.get<Dish[]>(`${this.baseUrl}dish/search-dish-with-category/${searchedValue}`);
  }

}
