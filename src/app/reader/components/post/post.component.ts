import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataEntry } from '../../models/response-payload.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post!: DataEntry;

  constructor (
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.activatedRoute.params.subscribe(parameter => {
      const lcCache = localStorage.getItem('posts');
      if (lcCache) {
        this.post = JSON.parse(lcCache).find((entry: any) => entry.data.id === parameter['id']) as DataEntry;
      }
    });
  }
}
