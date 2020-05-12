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
  people = [
    { id: 3, name: 'trường', age: '18', gender: 'male' },
    { id: 4, name: 'chiến', age: '20', gender: 'female' },
    { id: 5, name: 'thắng', age: '23', gender: 'female' },
    { id: 6, name: 'lợi', age: '24', gender: 'male' }
  ];

  removePersonByName(name:string){
    var id = this.people.findIndex(e=>e.name ===name);
    this.people.splice(id,1);
  }

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
