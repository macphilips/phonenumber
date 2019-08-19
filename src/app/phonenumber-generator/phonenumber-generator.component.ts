import { Component } from '@angular/core';
import { PhoneNumberGeneratorService } from './phonenumber-generator.service';

@Component({
  selector: 'app-phone-generator-view',
  templateUrl: './phonenumber-generator.component.html',
})
export class PhoneNumberGeneratorComponent {
  phoneNumbers: string[] = [];
  maxPhoneNumber: string;
  minPhoneNumber: string;
  size: number;

  reverse = false;

  hasError = false;

  constructor(private pns: PhoneNumberGeneratorService) {
  }

  sort() {
    this.reverse = !this.reverse;
    if (this.reverse) {
      this.phoneNumbers.reverse();
    } else {
      this.phoneNumbers.sort();
    }
  }

  generatePhoneNumbers() {
    if (this.size > 10000) {
      this.hasError = true;
      return;
    }
    const phoneNumbers = this.pns.generate(this.size);
    this.phoneNumbers = phoneNumbers;
    this.minPhoneNumber = phoneNumbers[0];
    this.maxPhoneNumber = phoneNumbers[phoneNumbers.length - 1];
  }

  saveToFile() {

  }

  trackByPhoneNumber(id, phoneNumber) {
    return phoneNumber;
  }
}
