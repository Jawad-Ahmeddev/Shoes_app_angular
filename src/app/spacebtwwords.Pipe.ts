import { PipeTransform,Pipe } from "@angular/core";





@Pipe({
    name: 'Spaceing'
})
export class spacebtwwordsPipe implements PipeTransform{
    transform(value: any) : any {
        if (typeof value !== 'string') {
            return value;
        }
        return value.split('').join(' ');
    }
}