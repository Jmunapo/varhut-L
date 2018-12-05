import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth_togen';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authentication = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) { 
    this.plt.ready().then(()=>{
      this.checkToken();
    })
  }

  login(){
    return this.storage.set(TOKEN_KEY, 'joemags').then(res => {
      this.authentication.next(true);
    });
  }

  logout(){
    return this.storage.remove(TOKEN_KEY).then(()=>{
      this.authentication.next(false);
    })
  }

  isAuthenticated(){
    return this.authentication.value;
  }

  checkToken(){
    return this.storage.get(TOKEN_KEY).then(res=>{
      if(res){
        this.authentication.next(true)
      }
    })
  }
}
