import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './welcome-page/header/header.component';
import { OverdueFeesComponent } from './overdue-fees/overdue-fees.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{
  path: '', component: WelcomePageComponent, children: []
},
{
  path: 'index', component: WelcomePageComponent, children: []
},
{
  path: 'books', component: BooksListComponent, children: []
},
{
  path: 'books/details/:id', component: BooksDetailComponent, children: []
},
{
  path: 'books/details', component: BooksDetailComponent, children: []
},
{
  path: 'overduefees', component: OverdueFeesComponent, children: []
},
{
  path: 'contact', component: ContactDetailsComponent, children: []
},
{
  path: 'login', component: LoginComponent, children: []
},
{
  path: 'register', component: RegisterComponent, children: []
},
{
  path: 'logout', component: LogoutComponent, children: []
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
