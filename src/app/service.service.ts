import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  message(data: any) {
    const url = 'https://medicmessageapi.onrender.com/'; // replace with your API endpoint
    return this.http.post(url, data);
  }
}
