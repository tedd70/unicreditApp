import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Interfaces
import { CategoryInterface } from '../business/interfaces/category.interface';
import { BookInterface } from '../business/interfaces/book.interface';

@Injectable({
  providedIn: "root"
})
export class HomeService {

  constructor(private http: HttpClient) {}

  public searchBook(keyword): Observable<BookInterface[]> {
    return this.http.get<BookInterface[]>(`https://localhost:44330/Book/search?keyword=${keyword}`);
  }

  public getAllCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>('https://localhost:44330/Category');
  }

  public addNewCategory(category): Observable<CategoryInterface> {
    return this.http.post<CategoryInterface>('https://localhost:44330/Category', category)
  }

  public getAllBooksByCaterogyId(categoryId): Observable<BookInterface[]> {
    return this.http.get<BookInterface[]>(`https://localhost:44330/Book?categoryId=${categoryId}`);
  }

  public updateBook(book): Observable<BookInterface[]> {
    return this.http.put<BookInterface[]>('https://localhost:44330/Book', book)
  }

  public createBook(book): Observable<BookInterface[]> {
    return this.http.post<BookInterface[]>('https://localhost:44330/Book', book)
  }
}
