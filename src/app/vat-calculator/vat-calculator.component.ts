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
   let taxIndex = 10;
   value = parseFloat(value);
   if (isNaN(value)) {
    this.afterTax = '---';
   } else {
    this.afterTax = value + (value * 1 / taxIndex);
   }

  }

}
