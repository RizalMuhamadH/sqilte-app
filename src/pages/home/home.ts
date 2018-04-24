import { ListingPage } from './../listing/listing';
import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // list: any;
  identification: number;
  name: string;
  email: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private database: DatabaseProvider) {
    
  }
  addUsers(){
    let user = {
      identification: this.identification,
      name: this.name,
      email: this.email
    }
    this.database.createUser(user.identification, user.name, user.email).then((data) => {

      this.identification = null;
      this.name = '';
      this.email = '';
      
      let toast = this.toastCtrl.create({
        message: "Success Add User",
        duration: 2000,
        position: 'bottom'
      });
      toast.present(toast);

      console.log(data);
      // this.showToast('Success Add User');
    }, (error) =>{
      console.log(error);
      this.showToast('Failed Add User');
    });
  }

  moveToPage(){
    this.navCtrl.push(ListingPage);
  }

  showToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }
}
