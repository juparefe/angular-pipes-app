import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    transform( valor: boolean = true ): string {
        return valor ? 'si vuela' : 'no vuela';
    }
}