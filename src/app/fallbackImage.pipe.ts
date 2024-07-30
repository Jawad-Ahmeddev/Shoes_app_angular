import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallbackImage'
})
export class FallbackImagePipe implements PipeTransform {
  transform(imageUrl: string): string {
    // If the image URL is invalid, use the placeholder URL
    return imageUrl || './assets/samsung.jfif';
  }
}
