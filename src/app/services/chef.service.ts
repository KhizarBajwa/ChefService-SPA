import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chef } from '../models/Chef';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ChefService {
    private baseUrl: string = environment.baseUrl + 'api/';

    constructor(private http: HttpClient) { }

    public addChef(chef: Chef) {
        return this.http.post(this.baseUrl + 'chef', chef);
    }

    public updateChef(id: number, chef: Chef) {
        return this.http.put(this.baseUrl + 'chef/' + id, chef);
    }

    public getChef(): Observable<Chef[]> {
        return this.http.get<Chef[]>(this.baseUrl + `chef`);
    }

    public deleteChef(id: number) {
        return this.http.delete(this.baseUrl + 'chef/' + id);
    }

    public getChefById(id: number): Observable<Chef> {
        return this.http.get<Chef>(this.baseUrl + 'chef/' + id);
    }

    public search(name: string): Observable<Chef[]> {
        return this.http.get<Chef[]>(`${this.baseUrl}chef/search/${name}`);
    }

}
