import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
