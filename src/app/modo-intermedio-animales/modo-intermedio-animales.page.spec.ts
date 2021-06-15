import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModoIntermedioAnimalesPage } from './modo-intermedio-animales.page';

describe('ModoIntermedioAnimalesPage', () => {
  let component: ModoIntermedioAnimalesPage;
  let fixture: ComponentFixture<ModoIntermedioAnimalesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModoIntermedioAnimalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModoIntermedioAnimalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
