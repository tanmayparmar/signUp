import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  private subscription: Subscription;

  constructor(private fb: FormBuilder, private http: HttpClientModule) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      activity: [''],
      comments: ['']
    });
  }
  ngOnInit() {}
}
