import { HttpModule } from '@angular/http';
import { UserDetailService } from './../services/user-detail.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  @Input() user: User;

  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private userdetailService: UserDetailService,
    private route: ActivatedRoute,
    private router: Router,
   private http: HttpClient
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      activity: [''],
      comments: ['']
    });
  }
  ngOnInit() {
    this.user = <User>{};
  }

  btnSubmit() {
    this.subscription = this.userdetailService
      .postSignUp(this.registerForm.value)
      .subscribe(registerUser => {
        console.log(registerUser);
        //  this.registerForm.reset();
      });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }
}
