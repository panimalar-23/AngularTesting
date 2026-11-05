import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteGeneratorComponent } from './quote-generator';
import { QuoteService } from '../quote';

describe('QuoteGeneratorComponent', () => {
  let component: QuoteGeneratorComponent;
  let fixture: ComponentFixture<QuoteGeneratorComponent>;
  let quoteServiceSpy: jasmine.SpyObj<QuoteService>;

  beforeEach(async () => {
    quoteServiceSpy = jasmine.createSpyObj('QuoteService', [
      'getRandomQuote'
    ]);

    await TestBed.configureTestingModule({
      imports: [QuoteGeneratorComponent],
      providers: [
        { provide: QuoteService, useValue: quoteServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteGeneratorComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update text with the quote returned by the service', () => {
    quoteServiceSpy.getRandomQuote.and.returnValue(
      'Success begins with a single step.'
    );

    fixture.detectChanges();

    expect(component.text).toBe(
      'Success begins with a single step.'
    );
  });

  it('should call getRandomQuote when ngOnInit runs', () => {
    quoteServiceSpy.getRandomQuote.and.returnValue(
      'Never stop learning.'
    );

    fixture.detectChanges();

    expect(quoteServiceSpy.getRandomQuote).toHaveBeenCalled();
  });
});