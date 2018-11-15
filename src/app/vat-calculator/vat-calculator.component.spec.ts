import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { VatCalculatorComponent } from './vat-calculator.component';

describe('VatCalculatorComponent', () => {
  let component: VatCalculatorComponent;
  let fixture: ComponentFixture<VatCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ VatCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('#calculateTax should return 0 if value is 0', () => {
    component.calculateTax(0);
    expect(component.afterTax).toEqual(0);
  });

  it ('#calculateTax should return 110 if value is 100', () => {
    component.calculateTax(100);
    expect(component.afterTax).toEqual(110);
  });

  it ('#calculateTax should return --- if value is not a number', () => {
    component.calculateTax('TEXTO');
    expect(component.afterTax).toEqual('---');
  });

  it('should render "Valor con impuesto: 110" in p with ID "afterTax" if value is 100', () => {
    component.calculateTax(100);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#afterTax').textContent).toContain('Valor con impuesto: 110');
  });

  it ('#calculateTax should return 1150000 if value is 1000000', () => {
    component.calculateTax(1000000);
    expect(component.afterTax).toEqual(1150000);
  });

  it('should render "Valor con impuesto: 1150000" in p with ID "afterTax" if value is 1000000', () => {
    component.calculateTax(1000000);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#afterTax').textContent).toContain('Valor con impuesto: 1150000');
  });

});
