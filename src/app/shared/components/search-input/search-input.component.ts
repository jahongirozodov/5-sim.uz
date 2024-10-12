import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  @Input() placeholder: string = '';
  @Input() search: string = 'salom';
  @Output() searchChange = new EventEmitter<string>();

  inputChange(event: any) {
    this.searchChange.emit(event.target.value);
  }
}
