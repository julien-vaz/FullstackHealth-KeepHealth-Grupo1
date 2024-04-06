import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from '../pipes/age.pipe';
import { HeightPipe } from '../pipes/height.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ CommonModule, AgePipe, HeightPipe ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: any;
  address: any | undefined;

  constructor(){
    let users = JSON.parse(localStorage.getItem("users") || '{}');
      if (users) {
        this.user = users; // O local storage está devolvendo apenas 1 usuário, não uma lista de usuáries, por isso essa declaração. Acho que aqui, como não temos um backend de verdade, é uma questão de escolha. Se o backend for uma lista, vai ser preciso criar uma chave "isLogged" para saber qual usuárie fez login.
      };
      console.log(this.user);
  };




}
