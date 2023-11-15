import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  numberAttribute,
} from '@angular/core';

@Directive({
  selector: '[rotate]',
})
export class RotateDirective {
  @Input({ alias: 'rotate', transform: numberAttribute })
  rotate: number | undefined;

  @Input({ alias: 'step', transform: numberAttribute })
  step: number | undefined;

  private defaultRotate = 0;
  private defaultStep = 10;
  private press = false;

  constructor(private el: ElementRef) {}
  ngOnChanges() {
    this.el.nativeElement.style.transform = `rotate(${
      this.rotate || this.defaultRotate
    }deg)`;
    if (this.rotate) {
      this.defaultRotate = this.rotate;
    }
  }
  private rotateFn(degrees: number) {
    this.el.nativeElement.style.transform = `rotate(${degrees}deg)`;
  }

  @HostListener('click')
  onClick() {
    if (this.step) {
      this.defaultStep = this.step;
    }
    if (this.press) {
      this.rotateFn(this.defaultRotate - this.defaultStep);
      this.defaultRotate = this.defaultRotate - this.defaultStep;
    } else {
      this.rotateFn(this.defaultRotate + this.defaultStep);
      this.defaultRotate = this.defaultRotate + this.defaultStep;
    }
  }
  @HostListener('window:keydown.shift')
  onKeydownn() {
    this.press = !this.press;
  }
  @HostListener('window:keyup.shift')
  onKeyup() {
    this.press = !this.press;
  }
}
