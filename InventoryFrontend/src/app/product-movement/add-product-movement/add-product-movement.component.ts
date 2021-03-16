import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { ProductMovementAPIService } from 'src/app/services/product-movement-api.service';
import { ProductMovement } from 'src/beans/ProductMovement';

@Component({
  selector: 'app-add-product-movement',
  templateUrl: './add-product-movement.component.html',
  styleUrls: ['./add-product-movement.component.css']
})
export class AddProductMovementComponent {

  productMovementForm;
  constructor(
    public dialogRef: MatDialogRef<AddProductMovementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductMovement, private formBuilder: RxFormBuilder, private productMovementApi: ProductMovementAPIService) {
    console.log(data);
    this.productMovementForm = this.formBuilder.group(new ProductMovement(0, new Date(), 0, 0, 0, 0));

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

  addProductMovement() {

    this.productMovementApi.addProductMovement(this.productMovementForm.value).subscribe(response => {
      console.log(response);
      this.close();
    })

  }

  close(): void {
    this.dialogRef.close();
  }


}
