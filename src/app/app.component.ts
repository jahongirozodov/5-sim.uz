import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/home/layouts/header/header.component';
import { FooterComponent } from "./modules/home/layouts/footer/footer.component";
import { HomePageComponent } from "./modules/home/pages/home-page/home-page.component";
import { SearchInputComponent } from "./shared/components/search-input/search-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomePageComponent, SearchInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '5sim';
}
