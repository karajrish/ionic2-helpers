import { Component,OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
@Component({
  selector: 'page-user',
  templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit{
  data: string;
  constructor(public navCtrl: NavController,private navParams: NavParams) {

  }
  ngOnInit(){
    this.data = this.navParams.get('itemName');
  }
  onGoBack(){
    this.navCtrl.popToRoot();
  }
}
