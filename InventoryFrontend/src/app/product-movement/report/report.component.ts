import { Component, OnInit } from '@angular/core';
import { ProductMovementAPIService } from 'src/app/services/product-movement-api.service';
import { ProductMovement } from 'src/beans/ProductMovement';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  productMovements: ProductMovement[] = [];

  constructor(private productMovementApi: ProductMovementAPIService) {
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


}

