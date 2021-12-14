
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ResponsePayload } from '../../models/response-payload.model';
import { ReaderApiService } from '../../services/reader-api.service';
import { ApiParams } from '../../models/api-params.enum';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {
  posts!: ResponsePayload;
  limitOptions: number[] = [25, 10, 5];
  defaultLimit: number = this.limitOptions[0];
  currentLimit: number = this.defaultLimit;

  constructor (
    private readerApi: ReaderApiService
  ) { }

  ngOnInit (): void {
    const params = this.initParams();
    this.readerApi.getPosts(params).subscribe(posts => {
      this.posts = posts;
    });
  }

  changeLimit ($event: any): void {
    this.currentLimit = $event.target.value;
    const params = this.initParams();
    this.readerApi.getPosts(params).subscribe(posts => {
      this.posts = posts;
    });
  }

  loadPrevious (): void {
    const first = this.posts?.data['children'][0];
    let params = this.initParams();

    if (first) {
      const before = `${first['kind']}_${first['data']['id']}`;
      params = params.set(ApiParams.before, before);
    }

    this.getPosts(params);
  }

  loadNext (): void {
    let params = this.initParams();

    const children = this.posts?.data['children'];
    if (children) {
      const last = children[children.length - 1];
      if (last) {
        const after = `${last['kind']}_${last['data']['id']}`;
        params = params.set(ApiParams.after, after);
      }
    }

    this.getPosts(params);
  }

  private getPosts (params: HttpParams): void {
    this.readerApi.getPosts(params).subscribe(posts => {
      this.posts = posts;
    });
  }

  private initParams (): HttpParams {
    return new HttpParams()
      .set(ApiParams.limit, this.currentLimit)
      .set(ApiParams.rawJson, '1');
  }
}
