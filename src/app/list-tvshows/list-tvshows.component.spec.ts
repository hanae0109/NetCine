import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTvshowsComponent } from './list-tvshows.component';

describe('ListTvshowsComponent', () => {
  let component: ListTvshowsComponent;
  let fixture: ComponentFixture<ListTvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTvshowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
