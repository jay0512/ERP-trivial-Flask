import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductMovementComponent } from './add-product-movement/add-product-movement.component';
import { EditProductMovementComponent } from './edit-product-movement/edit-product-movement.component';
import { ProductMovementAPIService } from '../services/product-movement-api.service';
import { ProductMovement } from 'src/beans/ProductMovement';
import { ProductAPIService } from '../services/product-api.service';

@Component({
  selector: 'app-product-movement',
  templateUrl: './product-movement.component.html',
  styleUrls: ['./product-movement.component.css']
})
export class ProductMovementComponent implements OnInit {


  productMovements: ProductMovement[] = [];

  constructor(private productMovementApi: ProductMovementAPIService, private dialog: MatDialog, private productApi: ProductAPIService) {
  }

  ngOnInit(): void {
    this.getProductMovements();
  }

  getProductMovements() {
    this.productMovementApi.getProductMovements().subscribe(productMovements => {
      console.log(productMovements);
      this.productMovements = productMovements;
      this.productMovements.forEach(element => {
        console.log(element);

      });
    });
  }
  addDialog(): void {
    const dialogRef = this.dialog.open(AddProductMovementComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProductMovements();
    });
  }

  editDialog(productMovement: ProductMovement): void {
    const dialogRef = this.dialog.open(EditProductMovementComponent, {
      width: '550px',
      data: productMovement
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProductMovements();
    });
  }

  getProduct(product_id: number) {

    this.productApi.getProduct(product_id).subscribe(product => {

    })
  }

}
