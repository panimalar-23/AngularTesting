import { Component } from '@angular/core';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuoteGeneratorComponent],
  template: `
    <h1>Unit Testing a Standalone Component</h1>
    <app-quote-generator></app-quote-generator>
  `,
  styleUrl: './app.css'
})
export class App {
}
