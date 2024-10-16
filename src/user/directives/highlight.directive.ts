import {
  Directive,
  ElementRef,
  inject,
  Input,
  numberAttribute,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit, OnChanges {
  private renderer = inject(Renderer2);

  private elementRef = inject(ElementRef, {host: true});

  @Input({required: true, transform: numberAttribute})
  age!: number;

  @Input({required: true, transform: numberAttribute})
  maxAge!: number;

  @Input()
  alertClassName = 'alert';

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('age' in changes || 'maxAge' in changes) {
      this.highlight(this.age > this.maxAge);
    }
  }

  private highlight(highlight: boolean): void {
    const {nativeElement} = this.elementRef;
    const {alertClassName} = this;

    if (highlight) {
      this.renderer.addClass(nativeElement, alertClassName);
      //this.renderer.setStyle(nativeElement, 'color', 'red');
    } else {
      this.renderer.removeClass(nativeElement, alertClassName);
      //this.renderer.setStyle(nativeElement, 'color', '');
    }
  }
}
