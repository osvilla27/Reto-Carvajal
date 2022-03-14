import { Component, OnInit } from '@angular/core';
import { Color } from '../components/colors/color.model';
import { ColorService } from '../components/colors/colors.service';
import { Size } from '../components/sizes/size.model';
import { SizeService } from '../components/sizes/sizes.service';
import { Product } from './product.model';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products?: Product[];
  currentProduct: Product = {};
  currentIndex = -1;
  title = '';
  colors? : Color[];
  sizes? : Size[];

  constructor(private productService: ProductService,
              private colorService: ColorService,
              private sizeService: SizeService
              ) { }

  ngOnInit() {
    this.retrieveProducts();
    this.retrieveColors();
    this.retrieveSizes();
  }
  retrieveProducts(): void {
    this.productService.getAll()
    .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  };

  retrieveColors(): void {
    this.colorService.getAll()
    .subscribe({
        next: (data) => {
          this.colors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  retrieveSizes(): void {
    this.sizeService.getAll()
    .subscribe({
        next: (data) => {
          this.sizes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }
  setActiveProduct(product: Product, index: number) {
    this.currentProduct = product;
    this.currentIndex = index;
  }
  removeAllProducts(): void {
    this.productService.deleteAll()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }
  searchTitle(): void {
    this.currentProduct = {};
    this.currentIndex = -1;
    this.productService.findByTitle(this.title)
    .subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
