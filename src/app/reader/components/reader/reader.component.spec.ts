import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ReaderModule } from '../../reader.module';
import { ReaderComponent } from './reader.component';
import { ReaderApiService } from './../../services/reader-api.service';

describe('ReaderComponent', () => {
  let component: ReaderComponent;
  let fixture: ComponentFixture<ReaderComponent>;
  let nav: HTMLElement;
  let appList: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderComponent],
      providers: [ReaderApiService],
      imports: [ReaderModule, HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check navigation buttons', () => {
    expect(component).toBeTruthy();
    nav = fixture.nativeElement.querySelector('nav');
    appList = fixture.nativeElement.querySelector('app-list');
    expect(appList).toBeTruthy();
    expect(nav).toBeTruthy();
    expect(nav.textContent).toContain('Prev');
    expect(nav.textContent).toContain('Next');
    fixture.detectChanges();
  });

  it('check triggering loading new data', async () => {
    component.ngOnInit();
    fixture.detectChanges();

    component.loadNext();
  });
});
