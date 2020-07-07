import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlistPage } from './plist.page';

describe('PlistPage', () => {
  let component: PlistPage;
  let fixture: ComponentFixture<PlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
