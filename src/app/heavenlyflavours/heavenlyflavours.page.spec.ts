import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeavenlyflavoursPage } from './heavenlyflavours.page';

describe('HeavenlyflavoursPage', () => {
  let component: HeavenlyflavoursPage;
  let fixture: ComponentFixture<HeavenlyflavoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavenlyflavoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeavenlyflavoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
