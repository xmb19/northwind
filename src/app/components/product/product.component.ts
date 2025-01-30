import { Component } from '@angular/core';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:Product[] = [];

  constructor() { }
  ngOnInit() :void { 
  }

}
