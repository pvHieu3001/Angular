import { Component, OnInit } from '@angular/core';
import {productService} from '../service/product.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers : [productService]
})
export class BookComponent implements OnInit {
  products:any
  constructor(private productService: productService) {
    productService.getProduct()
    .then(data=>this.products)
    .catch(err=>console.log(err));

    console.log(this.products);
  }

  ngOnInit(): void {
  }

}
