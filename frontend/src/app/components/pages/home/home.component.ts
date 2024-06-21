import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService, activatedRoute: ActivatedRoute) {
    let productsObservalbe:Observable<Product[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        productsObservalbe = this.productService.getAllProductsBySearchTerm(params.searchTerm);
      else if (params.tag)
        productsObservalbe = this.productService.getAllProductByTag(params.tag);
      else
      productsObservalbe = productService.getAll();

      productsObservalbe.subscribe((serverProducts) => {
          this.products = serverProducts;
        })
    })
  }

  ngOnInit(): void {
  }

}
