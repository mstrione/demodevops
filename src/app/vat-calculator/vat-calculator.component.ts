import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.sass']
})
export class VatCalculatorComponent implements OnInit {

  cantidad;
  afterTax;

  constructor() {}

  ngOnInit() {
  }

  calculateTax(value) {
   alert(value);
   this.afterTax = value;
  }

}
