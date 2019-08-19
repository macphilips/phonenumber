import { Component } from '@angular/core';
import { PhoneNumberGeneratorService } from './phonenumber-generator.service';

@Component({
  selector: 'app-phone-generator-view',
  templateUrl: './phonenumber-generator.component.html',
})
export class PhoneNumberGeneratorComponent {
  phoneNumbers: string[] = [];
  paginatedPhoneNumber: string[] = [];
  maxPhoneNumber: string;
  minPhoneNumber: string;
  size: number;

  reverse = false;

  hasError = false;

  pageSize = 25;
  page = 1;

  constructor(private pns: PhoneNumberGeneratorService) {
  }

  sort() {
    if (this.reverse) {
      this.phoneNumbers.reverse();
    } else {
      this.phoneNumbers.sort();
    }
    this.reverse = !this.reverse;
  }

  generatePhoneNumbers() {
    if (this.size > 10000) {
      this.hasError = true;
      return;
    }
    this.reverse = false;
    this.paginatedPhoneNumber = [];
    this.page = 1;

    const phoneNumbers = this.pns.generate(this.size);
    this.phoneNumbers = phoneNumbers;

    this.sort();

    this.minPhoneNumber = phoneNumbers[0];
    this.maxPhoneNumber = phoneNumbers[phoneNumbers.length - 1];

  }

  saveToFile() {

  }

  trackByPhoneNumber(id, phoneNumber) {
    return phoneNumber;
  }

  generatePaginatedPhoneNumberList(): string[] {
    const {length: totalItem} = this.phoneNumbers;
    const {pageSize, page} = this;
    const totalPage = totalItem / pageSize;
    const offset = ((page - 1 ) / totalPage) * totalItem;
    return this.phoneNumbers.slice(offset, offset + pageSize);
  }
}
