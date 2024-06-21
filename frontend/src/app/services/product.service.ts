import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_products, sample_tags } from 'src/data';
import { PRODUCTS_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_BY_TAG_URL, PRODUCTS_TAGS_URL, PRODUCT_BY_ID_URL } from '../shared/constants/urls';
import { Product } from '../shared/models/Product';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(PRODUCTS_TAGS_URL);
  }

  getAllProductByTag(tag: string): Observable<Product[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Product[]>(PRODUCTS_BY_TAG_URL + tag);
  }

  getProductById(productId:string):Observable<Product>{
    return this.http.get<Product>(PRODUCT_BY_ID_URL + productId);
  }

}
