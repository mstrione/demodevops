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
    let taxIndex;
    let tax;
    value = parseFloat(value);
    if (isNaN(value)) {
      this.afterTax = '---';
    } else {
      if(value >= 1000000 ) {
        taxIndex = 15;
      } else {
        taxIndex = 10;
      }
      tax = (value * (taxIndex / 100));
      this.afterTax = value + tax ;
    }
  }

}
