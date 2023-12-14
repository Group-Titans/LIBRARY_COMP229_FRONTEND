import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router } from "@angular/router";
@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.less']
})
export class BooksDetailComponent implements OnInit {
books:any = {};
bookId:any;
  constructor(private http: HttpClient,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
        this.bookId = this.route.snapshot.paramMap.get('id');

        const apiUrl = 'http://localhost:3001/api/books/'+this.bookId;
        this.http.get(apiUrl).subscribe(
          (response: any) => {
              // Assign the fetched books to the component variable
              this.books=response;
          },
          (error) => {
            console.error('Error fetching books:', error);
          }
        );
  }
  onSubmit(){
        if(!this.bookId){
          const apiUrl = 'http://localhost:3001/api/books';
          this.http.post(apiUrl, this.books).subscribe(
            (response: any) => {
                // Assign the fetched books to the component variable
                this.books= response;
                this.router.navigateByUrl("/books");
            },
            (error) => {
              console.error('Error fetching books:', error);
            }
          );
        } else {
          const apiUrl = 'http://localhost:3001/api/books/'+this.bookId;
          this.http.put(apiUrl, this.books).subscribe(
            (response: any) => {
                // Assign the fetched books to the component variable
                this.books = response;
                this.router.navigateByUrl("/books");
            },
            (error) => {
              console.error('Error fetching books:', error);
            }
          );
        }
  }

}
