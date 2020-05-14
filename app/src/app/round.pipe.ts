import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name:'roundNumb'})

export class RoundPipe implements PipeTransform{
    transform(value: number, isUpper: boolean, addTo:number):number {
        if(isUpper){
            return Math.ceil(value+addTo)
        }
        return Math.floor(value+addTo);
    }
    
}