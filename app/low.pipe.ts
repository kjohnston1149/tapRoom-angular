import {Pipe, PipeTransform} from '@angular/core';
import {Beer} from './beer.model';

@Pipe ({
  name: "low",
  pure: false
})

// export class LowPipe implements PipeTransform {
//   transform(input: Beer[], amountLeft: number, isItLow: boolean) {
//     var output: Beer[] = [];
//     for (var i = 0; i < input.length; i++){
//       if(input[i].amountLeft <= 10) {
//         output[i].isItLow === true;
//         console.log(output);
//         return output;
//     } else {
//       return input;
//     }
//
//
//     }
//     }
//   }


export class LowPipe implements PipeTransform {
  transform(input: Beer){
    if (input.isItLow === true){
      return "this beer is low";
    } else {
      return "You don't need to re-stock";
    }
  }
}
