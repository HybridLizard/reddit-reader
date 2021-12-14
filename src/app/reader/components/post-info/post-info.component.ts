import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostInfoComponent {
  @Input() data: any;
}
