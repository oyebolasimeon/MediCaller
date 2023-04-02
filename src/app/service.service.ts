import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  message(data: any) {
    const url = 'https://example.com/api/my-endpoint'; // replace with your API endpoint
    return this.http.post(url, data);
  }
}
