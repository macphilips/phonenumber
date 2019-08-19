import { TestBed } from '@angular/core/testing';

import { PhoneNumberGeneratorService } from './phonenumber-generator.service';

describe('Phone Number GeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneNumberGeneratorService = TestBed.get(PhoneNumberGeneratorService);
    expect(service).toBeTruthy();
  });
  it('should generate phone number of required size', function () {
    const service: PhoneNumberGeneratorService = TestBed.get(PhoneNumberGeneratorService);
    const phoneNumbers = service.generate(10);
    expect(phoneNumbers.length).toEqual(10);
  });
  it('should return a sorted list of phone number', function () {
    const service: PhoneNumberGeneratorService = TestBed.get(PhoneNumberGeneratorService);
    const phoneNumbers = service.generate(10);
    expect(phoneNumbers[0] < phoneNumbers[1]).toBeTruthy();
    expect(phoneNumbers[1] < phoneNumbers[2]).toBeTruthy();
    expect(phoneNumbers[2] < phoneNumbers[3]).toBeTruthy();
    expect(phoneNumbers[3] < phoneNumbers[4]).toBeTruthy();
    expect(phoneNumbers[4] < phoneNumbers[5]).toBeTruthy();
    expect(phoneNumbers[5] < phoneNumbers[6]).toBeTruthy();
    expect(phoneNumbers[6] < phoneNumbers[7]).toBeTruthy();
    expect(phoneNumbers[7] < phoneNumbers[8]).toBeTruthy();
    expect(phoneNumbers[8] < phoneNumbers[9]).toBeTruthy();
  });
});
