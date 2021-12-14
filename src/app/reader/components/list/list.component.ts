import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataEntry } from '../../models/response-payload.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() posts!: DataEntry[];

  ngOnChanges () {
    if (this.posts) {
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  }
}
