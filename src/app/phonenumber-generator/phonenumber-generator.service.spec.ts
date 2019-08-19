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
});
