import { Component, OnInit } from '@angular/core';
import { Product } from 'src/beans/Product';
import { ProductAPIService } from '../services/product-api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productApi: ProductAPIService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productApi.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }
  addDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

  editDialog(product: Product): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '550px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

}
