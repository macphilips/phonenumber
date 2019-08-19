import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-size-selector',
  templateUrl: './page-size-selector.component.html',
  styleUrls: ['./page-size-selector.component.scss'],
})
export class PageSizeSelectorComponent implements OnInit {
  caretDown = faCaretDown;
  @Output() pageSizeChange = new EventEmitter<number>();
  @Input() pageSizeList = [25, 50, 100];
  pageSize: number;

  selectDropdownState = { pageSize: false };

  @ViewChild('pageSizeSelector')
  filterDropdown: ElementRef;


  trackById(id, item) {
    return item;
  }

  toggleSelect(show: boolean) {
    const timeoutHandler = () => {
      this.selectDropdownState.pageSize = show;
    };
    setTimeout(timeoutHandler, 100);

  }

  updateValue(pageSize) {
    const size = parseInt(pageSize, 10);
    if (Number.isNaN(size)) {
      return;
    }
    this.pageSize = size;
    this.pageSizeChange.emit(size);
    this.toggleSelect(false);
  }

  ngOnInit(): void {
    this.pageSize = this.pageSizeList[0];
  }
}
