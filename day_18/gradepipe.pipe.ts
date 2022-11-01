import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})
export class GradepipePipe implements PipeTransform {

  transform(input:number):string {

    var output:string ="";
      switch(input){
        case 1: output="outstanding"; break;
        case 2: output= "excellent"; break;
        case 3: output= "good"; break;
        case 4: output= "average"; break;
      }

      return output; 
  }

}
