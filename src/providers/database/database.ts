import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;


  constructor(public http: Http, public storage: SQLite) {
    if(!this.isOpen){
      this.storage = new SQLite();
      this.storage.create({name: "db_data.db", location: "default"}).then((db: SQLiteObject) =>{
        this.db = db;
        db.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, identification INTEGER, name TEXT, email TEXT)",[]);
        this.isOpen = true;
      }).catch((error) =>{
        console.log(error);
      });
    }
  }
  createUser(identification: number, name: string, email: string){
    return new Promise((respone, reject) =>{
      let sql = "INSERT INTO users (identification, name, email) VALUES (?, ?, ?)";
      this.db.executeSql(sql,[identification, name, email]).then((data) =>{
        respone(data);
      },(error) =>{
        reject(error);
      });
    });
  }

  getAllUsers(){
    return new Promise((respone, reject) =>{
      this.db.executeSql("SELECT * FROM users",[]).then((data) =>{
        let users = [];

        if(data.rows.length > 0){
          for(var i = 0; i < data.rows.length; i++){
            users.push({
              id: data.rows.item(i).id,
              identification: data.rows.item(i).identification,
              name: data.rows.item(i).name,
              email: data.rows.item(i).email
            });
          }
        }
        respone(users);
      }, (error) =>{
        reject(error);
      });
    });
  }

}
