export class Beer {
  public amountLeft: number = 20;
  public isItLow: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string, public imageFilePath: string) {  }

  dispensePint() {
    if(this.amountLeft > 0){
      this.amountLeft--;
    } else {
      alert("Y'all Are Out");
      this.amountLeft = 124;
    }
    if(this.amountLeft <= 10) {
      this.isItLow = true;
      console.log(this.isItLow);
    }

  }
}
