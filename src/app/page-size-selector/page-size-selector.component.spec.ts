import {TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import { PageSizeSelectorComponent } from './page-size-selector.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

function setInputValue<T>(fixture: ComponentFixture<T>, selector: string, value: string): void {
  fixture.detectChanges();
  const input = fixture.debugElement.query(By.css(selector)).nativeElement;
  input.value = value;
  input.dispatchEvent(new Event('input'));
  fixture.detectChanges();
}

describe('AppComponent', () => {
  let app: PageSizeSelectorComponent, fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageSizeSelectorComponent
      ],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(PageSizeSelectorComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
  it('should not emit page change event when input text changes',  (() => {
    const spy = spyOn(app.pageSizeChange, 'emit');
    spy.calls.reset();
    setInputValue(fixture, 'input[name="pageSize"]', 'nu');
    spy.calls.reset();
    setInputValue(fixture, 'input[name="pageSize"]', 'ni');
    expect(app.pageSizeChange.emit).not.toHaveBeenCalled();
    spy.calls.reset();

  }));
  it('should emit page change event when input text changes',  (() => {
    const spy = spyOn(app.pageSizeChange, 'emit');
    setInputValue(fixture, 'input[name="pageSize"]', '12');
    spy.calls.reset();

    setInputValue(fixture, 'input[name="pageSize"]', '12');
    expect(app.pageSizeChange.emit).toHaveBeenCalledWith(12);
    spy.calls.reset();
  }));

});
