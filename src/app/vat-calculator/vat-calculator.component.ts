import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.sass']
})
export class VatCalculatorComponent implements OnInit {
  title = 'demodevops';
  beforeTax;
  afterTax;
  tax; //Rodri
 
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
      tax = (value * (taxIndex / 100));
      this.afterTax = value + tax ;
      this.tax = tax; //Rodri
    }
  }
}
