import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAPIService } from 'src/app/services/product-api.service';
import { ProductMovementAPIService } from 'src/app/services/product-movement-api.service';
import { ProductMovement } from 'src/beans/ProductMovement';
import { AddProductMovementComponent } from '../add-product-movement/add-product-movement.component';
import { EditProductMovementComponent } from '../edit-product-movement/edit-product-movement.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


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

