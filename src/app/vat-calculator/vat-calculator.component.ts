import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.sass']
})
export class VatCalculatorComponent implements OnInit {

  beforeTax;
  afterTax;

  constructor() {}

  ngOnInit() {
  }

  calculateTax(value) {
    const taxIndex = 10;
    let tax;
    value = parseFloat(value);
    if (isNaN(value)) {
      this.afterTax = '---';
    } else {
      tax = (value * 1 / taxIndex);
      this.afterTax = value + tax ;
    }

  }

}
