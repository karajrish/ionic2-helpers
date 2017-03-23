import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BuyoutPage } from "../shop/buyout/buyout";
@Component({
  selector: 'page-user',
  templateUrl: 'shop.html'
})
export class ShopPage{
  constructor(public navCtrl: NavController) {

  }
  onGoToBuyout(data:string){
    this.navCtrl.push(BuyoutPage, {itemName: data});
  }
}
