import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./components/topbar/topbar.component";
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopbarComponent,MatButtonModule , MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'social-wall';
}
