import {Component, Output, EventEmitter} from '@angular/core'

@Component({
    templateUrl: './header.component.html',
    selector: 'head-banner'
})

export class HeaderComponent{
    @Output() myclick=new EventEmitter<boolean>();

    addForParent(){
        this.myclick.emit(true);
    }

    subForParent(){
        this.myclick.emit(false);
    }
}