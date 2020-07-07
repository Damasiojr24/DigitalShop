import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Store3Page } from './store3.page';

describe('Store3Page', () => {
  let component: Store3Page;
  let fixture: ComponentFixture<Store3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Store3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Store3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
