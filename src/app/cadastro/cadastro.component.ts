import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  users = localStorage.getItem("users");

  signUpForm!: FormGroup;

  constructor(private router: Router){}

  createForm() {
    this.signUpForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      birthdate: new FormControl(''),
      weightKg: new FormControl(''),
      heightCm: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

  signUp() {
    if (!this.signUpForm.valid){
      alert("Existem campos vazios!");
      return;
    }
    const user = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      birthdate: this.signUpForm.value.birthdate,
      weightKg: this.signUpForm.value.weightKg,
      heightCm: this.signUpForm.value.heightCm,
      password: this.signUpForm.value.password,
      repeatPassword: this.signUpForm.value.repeatPassword
    };
    if (this.signUpForm.value.password === this.signUpForm.value.repeatPassword) {
      if (this.users) {
        if (!this.users.includes(String(this.signUpForm.value.email))) {
          this.users += JSON.stringify(user);
          console.log(this.users);
          localStorage.setItem("users", this.users);
        }
      } else {
        localStorage.setItem("users", JSON.stringify(user));
      }
    } else {
      alert("A senha e sua confirmação não são iguais!");
    }
  }

  goToLogin(){
    this.router.navigate(["/login"]);
  }
}
