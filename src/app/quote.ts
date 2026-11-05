import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotes: string[] = [
    'Believe in yourself and all that you are.',
    'Great things take time.',
    'Success begins with a single step.',
    'Dream big and work hard.',
    'Never stop learning.'
  ];

  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}