import { Component } from '@angular/core';
import { PhoneNumberGeneratorService } from './phonenumber-generator.service';
import * as FileSaver from 'file-saver';

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
  generateTimestamp: number;

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
    this.generateTimestamp = Date.now();
  }

  saveToFile() {
    const text = this.phoneNumbers.join('\n');
    const blob = new Blob([text], {type: 'text/csv;charset=utf-8'});
    FileSaver.saveAs(blob, `${this.generateTimestamp}-PhoneNumber.csv`);
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
