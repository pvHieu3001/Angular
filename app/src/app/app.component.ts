import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  imageurl = 'https://images.unsplash.com/photo-1589063795367-4d46f1f1d9eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
  forgot = true;
  value=0;

  toggleForgot(){
    this.forgot = !this.forgot;
  }
  change(isAdd : boolean){
      if(isAdd){
        this.value += 1;
      }else{
        this.value -= 1;
      }
  }
}
