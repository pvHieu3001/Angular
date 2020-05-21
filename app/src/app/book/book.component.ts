import { Component, OnInit } from '@angular/core';
import {productService} from '../service/product.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers : [productService]
})
export class BookComponent implements OnInit {
  ip:String
  constructor(private productService: productService) {}

  ngOnInit(): void {
    this.productService.getProduct()
    .then(data=>this.ip = data)
    .catch(err=>console.log(err));
  }

}
