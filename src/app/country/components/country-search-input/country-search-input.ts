import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInput {
  placeholder = input<string>('Buscar')
  value = output<string>()
}
