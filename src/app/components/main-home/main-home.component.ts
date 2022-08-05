import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Items } from 'src/assets/mock/items';
import { ITEMS } from 'src/assets/mock/mock-items';
import { CartService } from 'src/app/services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  items = ITEMS;
  productFilters: string = 'all';
  filterProduct: Items[] = [];

  constructor(
    private cartService: CartService,
    // private cart: CartComponent
  ) {
  }

  ngOnInit(): void {
  }

  getAllProduct() {
    return this.items.length;
  }

  getProduct1() {
    return this.items.filter(product => product.type == "product1").length;
  }

  getProduct2() {
    return this.items.filter(product => product.type == "product2").length;
  }

  onFilterRadioChanged(dataFilter: string) {
    return this.productFilters = dataFilter;
  }

  addToCart(product: Items){
    this.cartService.addToCart(product);
    // this.cart.quantity ++;
  }

}
