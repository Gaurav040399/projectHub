import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder ,private  router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSignup() {
    // Implement your signup logic here
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const role = this.signupForm.value.role;
    const password = this.signupForm.value.password;

    console.log(name,email,role,password)
    this.router.navigate(['./login']);
  }
}
