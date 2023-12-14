import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../services/auth.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-books',
  templateUrl: './books-list.component.html',
  styleUrls: []
})
export class BooksListComponent implements OnInit {
  books: any[] = [];  // Define an array to hold the books data
  userRole: any;
  constructor(private http: HttpClient, private authService: AuthService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    // Fetch books data when the component is initialized
    this.fetchBooks();
    this.getUserRole();
  }

  fetchBooks(): void {
    // Replace 'YOUR_BOOKS_API_URL' with the actual URL of your Book API endpoint
    const apiUrl = 'http://localhost:3001/api/books';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.books = response;  // Assign the fetched books to the component variable
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
  getUserRole(): void {
    // Fetch the user role from the AuthService
    const userDetails = this.authService.getUserDetails();
    this.userRole = userDetails ? userDetails.role : '';
  }

  // onEdit(){
  //   const apiUrl = 'http://localhost:3001/api/books';

  //   this.http.get(apiUrl).subscribe(
  //     (response: any) => {
  //       this.books = response;  // Assign the fetched books to the component variable
  //       this.router.navigateByUrl("/books/details");
  //     },
  //     (error) => {
  //       console.error('Error fetching books:', error);
  //     }
  //   );
  // }
  onDelete(book: any){

    const apiUrl = 'http://localhost:3001/api/books/'+ book._id;
    this.http.delete(apiUrl, book).subscribe(
      (response: any) => {
          // Assign the fetched books to the component variable
          //this.router.navigateByUrl("/books");
          window.location.reload();
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
}
 addBook(){
  this.router.navigateByUrl("/books/details");
 }

}
