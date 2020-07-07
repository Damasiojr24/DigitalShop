import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Store4Page } from './store4.page';

describe('Store4Page', () => {
  let component: Store4Page;
  let fixture: ComponentFixture<Store4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Store4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Store4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
