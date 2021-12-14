import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { ReaderComponent } from './components/reader/reader.component';
import { ListComponent } from './components/list/list.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostInfoComponent } from './components/post-info/post-info.component';

@NgModule({
  declarations: [
    ReaderComponent,
    ListComponent,
    PostComponent,
    PostDetailsComponent,
    PostInfoComponent
  ],
  imports: [
    CommonModule,
    ReaderRoutingModule
  ]
})
export class ReaderModule { }
