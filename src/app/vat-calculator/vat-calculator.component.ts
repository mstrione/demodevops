import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.sass']
})
export class VatCalculatorComponent implements OnInit {

  value = 'Sin valor';
  afterTax = -1;

  constructor() {}

  ngOnInit() {
  }

  calculateTax(value) {
   this.afterTax = 0;
  }

}
