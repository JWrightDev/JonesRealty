import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  sendEmail(name: string, email: string, message: string, subject: string){
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('subject', subject);

    const headers = new HttpHeaders({'enctype' : 'multipart/form-data'});
    return this.http.post("https://formspree.io/f/xwkdykqg", formData, {headers: headers});
  }
}
