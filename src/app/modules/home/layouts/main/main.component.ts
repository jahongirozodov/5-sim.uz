import { Component } from '@angular/core';
import { SelectCountryComponent } from "../../components/select-country/select-country.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SelectCountryComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
