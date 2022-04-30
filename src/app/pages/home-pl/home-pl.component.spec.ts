import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlComponent } from './home-pl.component';

describe('HomePlComponent', () => {
  let component: HomePlComponent;
  let fixture: ComponentFixture<HomePlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
