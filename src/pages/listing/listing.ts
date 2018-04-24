import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';

/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})
export class ListingPage {

  list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider) {
  }

  ionViewDidLoad() {
    this.database.getAllUsers().then((data: any) => {
      console.log(data);
      this.list = data;
    }, (error) => {
      console.log(error);
    });

    console.log('ionViewDidLoad ListingPage');
  }

}
