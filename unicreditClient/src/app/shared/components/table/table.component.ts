import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public columnHeader = [];

  @Input('data') data: any[];
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.data && this.data.length > 0) {
      this.columnHeader = Object.keys(this.data[0]).filter(x => x !== "categoryId" && x !== "id");
    }
  }

  updateBook(book) {
    book.editMode = !book.editMode;
    this.update.emit(book);
  }

  cancelBtn(book, index) {
    book.editMode=!book.editMode;
    console.log(this.data[index])
    // if (book[index] == this.data[index]) {
    //   book = this.data[index];
    // }
    this.data.forEach((elem, index) => {
      if (book[index] = elem[index]) {
        book = elem;
      }
    })
  }
}
