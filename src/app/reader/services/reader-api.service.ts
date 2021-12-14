import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePayload } from '../models/response-payload.model';

@Injectable({
  providedIn: 'root'
})
export class ReaderApiService {
  private baseUrl: string = 'https://www.reddit.com/r/';
  private subreddit = 'sweden';
  private sufix = '.json';

  constructor (
    private http: HttpClient
  ) { }

  getPosts (params: HttpParams): Observable<ResponsePayload> {
    return this.http.get<ResponsePayload>(this.getUrl(), { params });
  }

  private getUrl (): string {
    return `${this.baseUrl}${this.subreddit}${this.sufix}`;
  }
}
