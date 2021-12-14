import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfoComponent } from './post-info.component';

describe('PostInfoComponent', () => {
  let component: PostInfoComponent;
  let fixture: ComponentFixture<PostInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInfoComponent);
    component = fixture.componentInstance;
    component.data = {
      score: 666,
      num_comments: 44,
      created: 1638958929,
      author: 'Dawid'
    };
    fixture.detectChanges();
  });

  it('should create', async () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
