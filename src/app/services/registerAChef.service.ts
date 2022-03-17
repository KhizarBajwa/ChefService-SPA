import { RegisterAChef } from './../models/RegisterAChef';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RegisterAChefService {
    private baseUrl: string = environment.baseUrl + 'api/';

    constructor(private http: HttpClient) { }

    public RegisterAChef(registerAChef: RegisterAChef) {
        return this.http.post(this.baseUrl + 'accounts', registerAChef);
    }

}
