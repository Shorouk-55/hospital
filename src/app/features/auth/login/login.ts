import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Error } from "../../../shared/components/error/error";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, InputTextModule, ButtonModule, Error, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [
      RxwebValidators.required({
        message: 'Email is required'
      }),
      RxwebValidators.email({
        message: 'Please enter a valid email address'
      })
    ]
    ],
    password: ['', [
      RxwebValidators.required({
        message: 'Password is required'
      }),
    ]
    ]
  })

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
