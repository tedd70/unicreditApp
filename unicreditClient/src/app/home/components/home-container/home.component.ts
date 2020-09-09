import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";

// Interfaces
import { BookInterface } from '../../business/interfaces/book.interface';
import { CategoryInterface } from '../../business/interfaces/category.interface';

// Components
import { HomeFormComponent } from '../home-form/home-form.component';

// Services
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public allCategories: CategoryInterface[];
  public books: BookInterface[];
  public selectedCategoryId;
  public keyword: string;

  constructor(
    private homeService: HomeService,
    private homeActivatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.homeActivatedRoute.data.subscribe(data => {
      this.allCategories = data.response;
      this.changeCategory(this.allCategories[0].id);
    });
  }

  changeCategory(categoryId) {
    this.homeService.getAllBooksByCaterogyId(categoryId).subscribe(data => {
      this.books = data;
      this.selectedCategoryId = categoryId;
    })
  }

  openModal() {
    let book = {
      categoryId: null,
      price: null,
      quantity: null,
      description: null,
      location: null,
      author: null,
      name: null,
      categories: this.allCategories
    }

    let dialogRef = this.dialog.open(HomeFormComponent, {
      width: '400px',
      data: book,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result) {
        result.categoryId = parseInt(result?.categoryId);

        this.homeService.createBook(result).subscribe(data => {
          this.changeCategory(result.categoryId);
        });
      }
    });
  }

  updateBook(book) {
    book.quantity = parseInt(book.quantity);

    this.homeService.updateBook(book).subscribe(data => {
      book = data;
    });
  }

  searchBook(keyword) {
    if (keyword.trim().length > 2) {
      this.homeService.searchBook(keyword).subscribe(data => {
        this.books = data;
      });
    }
    else {
      this.changeCategory(this.allCategories[0].id);  
    }
  }
}
