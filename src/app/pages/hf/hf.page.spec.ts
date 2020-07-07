import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HFPage } from './hf.page';

describe('HFPage', () => {
  let component: HFPage;
  let fixture: ComponentFixture<HFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
