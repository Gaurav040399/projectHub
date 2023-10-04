import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
     a:number = 0;
      increment(){
        this.a++
      }
      decrement(){
        this.a--
      }
}
