// nasa-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaApiService {
  private apiKey = 'DEMO_KEY';
  private apiUrl = 'https://api.nasa.gov/';

  constructor(private http: HttpClient) {}

  getAstronomyPictureOfDay(): Observable<any> {
    const url = `${this.apiUrl}planetary/apod?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  getImagenes(): Observable<any> {
    const url = `${this.apiUrl}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
