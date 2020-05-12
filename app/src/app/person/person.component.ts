import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name:String;
  @Input() age:number;
  @Input() gender:String;
  @Output() removePerson = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickXoa(){
    this.removePerson.emit(this.name);
  }

}
