export class Beer {
  public amountLeft: number = 124;
  public isItLow: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string) {  }
  // dispensePint() {
  //   if(this.amountLeft > 0){
  //     this.amountLeft --;
  //   } else {
  //     this.amountLeft = 124;
  //   }
  // }
}
