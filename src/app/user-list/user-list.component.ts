import { ActivatedRoute } from '@angular/router';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserDetailService } from '../services/user-detail.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private subscription: Subscription;
  users: Array<User>;

  constructor(private userDetailService: UserDetailService,
    private route: ActivatedRoute) {  }
  ngOnInit() {
    this.users = [];
    this.userDetailService.getAllUsers().subscribe(users => {
      this.users = users;
    });
   }
  getAlUser(user: User): void {
  }
}
