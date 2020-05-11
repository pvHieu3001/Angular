import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name='';
  newEn='';
  newVn='';
  arrSubject= ['math', 'literater', 'geography'];
  isShowForm = false;
  filterStatus = 'all';
    
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  entervalue(e){
    this.name = e.target.value;
  }

  addWord(){
    this.arrWords.unshift({
      id: this.addWord.length+1,
      en:this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn='';
    this.newVn='';
    this.isShowForm = false;
  }

  removeWord(id:number){
    var index = this.arrWords.findIndex(word => word.id == id);
    this.arrWords.splice(index, 1);
  }

  getShowStatus(memorized:boolean){
    const all = this.filterStatus ==='all';
    const remember = this.filterStatus==='remember' && memorized;
    const notremember = this.filterStatus==='notremember' && !memorized;

    console.log(all);
    //console.log(remember);
    //console.log(notremember);
    //console.log(all || remember || notremember  );
    return all || remember || notremember;
  }

}
