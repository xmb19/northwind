import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products:Product[] = [];
  dataLoaded = false;
  apiUrl ="https://localhost:44366/api/products/getall";

  constructor(private productService:ProductService) { }
  ngOnInit() :void { 
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products =response.data
      this.dataLoaded = true
    })
  }
}
