import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  users = localStorage.getItem("users");
  arrayUsers: JSON | undefined;

  signInForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signInForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  signIn() {
    if (this.users != null) {
      this.arrayUsers = JSON.parse(this.users);
      // TODO: validação de login
    } else {
      alert("Email não cadastrado!");
    }
  }

  resetPassword(){
    console.log(this.users);
    this.createForm();
    this.signInForm.value.password = "a1b2c4d4";
    // TODO: enviar dados ao localStorage
  }

  goToSignUp(){
    this.router.navigate(["/cadastro"]);
  }

};
