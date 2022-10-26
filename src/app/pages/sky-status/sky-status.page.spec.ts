import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkyStatusPage } from './sky-status.page';

describe('SkyStatusPage', () => {
  let component: SkyStatusPage;
  let fixture: ComponentFixture<SkyStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkyStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
