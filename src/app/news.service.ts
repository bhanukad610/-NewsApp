import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const APIURL = environment.apiUrl;
const APIKEY = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle : any;

  constructor(private http : HttpClient) { }

  getData(url) {
    return this.http.get(`${APIURL}/${url}&apiKey=${APIKEY}`)
  }

}
