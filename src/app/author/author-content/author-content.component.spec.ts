import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorContentComponent } from './author-content.component';

describe('AuthorContentComponent', () => {
  let component: AuthorContentComponent;
  let fixture: ComponentFixture<AuthorContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
