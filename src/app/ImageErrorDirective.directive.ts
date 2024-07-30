import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImageError]'
})
export class ImageErrorDirective {
  @Input() defaultImage: string = 'assets/imageerror.jfif';  // Path to the default error image

  constructor(private el: ElementRef<HTMLImageElement>) {}

  @HostListener('error') onError() {
    this.el.nativeElement.src = this.defaultImage;
  }
}
