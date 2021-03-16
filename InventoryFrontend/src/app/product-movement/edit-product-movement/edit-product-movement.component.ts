import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { plainToClass } from 'class-transformer';
import { ProductMovementAPIService } from 'src/app/services/product-movement-api.service';
import { ProductMovement } from 'src/beans/ProductMovement';

@Component({
  selector: 'app-edit-product-movement',
  templateUrl: './edit-product-movement.component.html',
  styleUrls: ['./edit-product-movement.component.css']
})
export class EditProductMovementComponent {


  productMovementForm;
  constructor(
    public dialogRef: MatDialogRef<EditProductMovementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductMovement, private formBuilder: RxFormBuilder, private productMovementApi: ProductMovementAPIService) {
    console.log(data);
    this.productMovementForm = this.formBuilder.group(plainToClass(ProductMovement, data));

    this.productMovementForm.controls.timestamp.setValidators([RxwebValidators.required()])
    this.productMovementForm.controls.qty.setValidators([RxwebValidators.required()])
    console.log(this.productMovementForm);

  }

  validate() {
    return this.productMovementForm.controls.timestamp.valid &&
      this.productMovementForm.controls.from_location.valid &&
      this.productMovementForm.controls.to_location.valid &&
      this.productMovementForm.controls.product_id.valid &&
      this.productMovementForm.controls.qty.valid
  }

  warning() {
    this.productMovementForm.controls.timestamp.markAsTouched();
    this.productMovementForm.controls.from_location.markAsTouched();
    this.productMovementForm.controls.to_location.markAsTouched();
    this.productMovementForm.controls.product_id.markAsTouched();
    this.productMovementForm.controls.qty.markAsTouched();
  }

  updateProductMovement() {

    this.productMovementApi.updateProductMovement(this.productMovementForm.value).subscribe(response => {
      console.log(response);
      this.close();
    })

  }

  close(): void {
    this.dialogRef.close();
  }


}

