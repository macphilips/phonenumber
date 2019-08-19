import { TestBed, async, inject } from '@angular/core/testing';
import { PhoneNumberGeneratorComponent } from './phonenumber-generator.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PhoneNumberGeneratorService } from './phonenumber-generator.service';

describe('PhoneNumberGeneratorComponent', () => {
  let app: PhoneNumberGeneratorComponent, fixture, service;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneNumberGeneratorComponent
      ],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    // .overrideTemplate(PhoneNumberGeneratorComponent, `<div></div>`)
      .compileComponents();
    fixture = TestBed.createComponent(PhoneNumberGeneratorComponent);
    app = fixture.debugElement.componentInstance;
    service = fixture.debugElement.injector.get(PhoneNumberGeneratorService);
  }));

  it('should create the PhoneNumberGeneratorComponent', () => {
    expect(app).toBeTruthy();
  });

  it('should generate sorted phone number when generate button is clicked', async () => {
    app.size = 5;

    const button = fixture.debugElement.nativeElement.querySelector('.page-heading #generator');
    button.click();

    fixture.detectChanges();

    const phoneNumbers = app.phoneNumbers;
    expect(phoneNumbers[0] < phoneNumbers[1]).toBeTruthy();
    expect(phoneNumbers[1] < phoneNumbers[2]).toBeTruthy();
    expect(phoneNumbers[2] < phoneNumbers[3]).toBeTruthy();
    expect(phoneNumbers[3] < phoneNumbers[4]).toBeTruthy();
  });

  it('should not generate sorted phone number when size is greater than 10000', async () => {
    app.size = 10001;

    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('.page-heading #generator');
    button.click();

    fixture.detectChanges();

    expect(compiled.querySelector('.page-heading small')).toBeTruthy();
  });

  it('should sort generated phone number to when sort number is clicked', async () => {
    app.size = 5;

    let button = fixture.debugElement.nativeElement.querySelector('.page-heading #generator');
    button.click();

    button = fixture.debugElement.nativeElement.querySelector('.action-bar #sort');
    button.click();

    const phoneNumbers = app.phoneNumbers;
    expect(phoneNumbers[0] > phoneNumbers[1]).toBeTruthy();
    expect(phoneNumbers[1] > phoneNumbers[2]).toBeTruthy();
    expect(phoneNumbers[2] > phoneNumbers[3]).toBeTruthy();
    expect(phoneNumbers[3] > phoneNumbers[4]).toBeTruthy();
  });

  it('should generate paginated phone number ', function () {
    app.size = 14;
    app.pageSize = 5;
    app.page = 1;

    const button = fixture.debugElement.nativeElement.querySelector('.page-heading #generator');
    button.click();

    expect(app.generatePaginatedPhoneNumberList().length).toEqual(5);

    app.page = 3;
    expect(app.generatePaginatedPhoneNumberList().length).toEqual(4);
  });
});
