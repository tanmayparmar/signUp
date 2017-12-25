import { UserDetailService } from './services/user-detail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent  },
  { path: 'userlist', component: UserListComponent},
  { path: 'homepage', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  providers: [UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
