import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUs } from '../models/ContactUs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactUsService {
    private baseUrl: string = environment.baseUrl + 'api/';

    constructor(private http: HttpClient) { }

    public addContactUs(contactUs: ContactUs) {
        return this.http.post(this.baseUrl + 'contactUs', contactUs);
    }

    public updateContactUs(id: number, contactUs: ContactUs) {
        return this.http.put(this.baseUrl + 'contactUs/' + id, contactUs);
    }

    public getcontactUs(): Observable<ContactUs[]> {
        return this.http.get<ContactUs[]>(this.baseUrl + `contactUs`);
    }

    public deleteContactUs(id: number) {
        return this.http.delete(this.baseUrl + 'contactUs/' + id);
    }

    public getContactUsById(id: number): Observable<ContactUs> {
        return this.http.get<ContactUs>(this.baseUrl + 'contactUs/' + id);
    }

    public search(name: string): Observable<ContactUs[]> {
        return this.http.get<ContactUs[]>(`${this.baseUrl}contactUs/search/${name}`);
    }
}
