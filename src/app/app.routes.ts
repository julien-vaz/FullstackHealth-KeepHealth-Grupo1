import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "cadastro", component: CadastroComponent},
    {path: "profile", component: ProfileComponent},
];
