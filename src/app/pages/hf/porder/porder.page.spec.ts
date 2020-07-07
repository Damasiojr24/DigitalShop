import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorderPage } from './porder.page';

describe('PorderPage', () => {
  let component: PorderPage;
  let fixture: ComponentFixture<PorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
