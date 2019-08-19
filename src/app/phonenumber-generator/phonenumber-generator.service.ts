import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberGeneratorService {

  private defaultFormat = '!##-####-###';

  constructor() {

  }

  public generate(size): Array<string> {
    const store = {};
    const replaceWithSymbol = (format) => {
      let str = '';
      for (let i = 0; i < format.length; i++) {
        if (format.charAt(i) === '#') {
          str += Math.floor(10 * Math.random());
        } else if (format.charAt(i) === '!') {
          str += 0;
        } else {
          str += format.charAt(i);
        }
      }
      return str;
    };
    for (let i = 0; i < size; i++) {
      let retry = 3; // prevent indefinite loop
      let num = '0';
      do {
        if (retry === 0) {
          break;
        }
        num = replaceWithSymbol(this.defaultFormat);
        retry--;
      } while (store[num]) ;
      store[num] = 1;
    }
    return Object.keys(store).sort();
  }
}
