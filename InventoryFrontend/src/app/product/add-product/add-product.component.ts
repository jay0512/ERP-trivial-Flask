import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { ProductAPIService } from 'src/app/services/product-api.service';
import { Product } from 'src/beans/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm;
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product, private formBuilder: RxFormBuilder, private productApi: ProductAPIService) {
    console.log(data);
    this.productForm = this.formBuilder.group(new Product(0, '', ''));

    this.productForm.controls.name.setValidators([RxwebValidators.required()])
    console.log(this.productForm);

  }

  validate() {
    return this.productForm.controls.name.valid && this.productForm.controls.description.valid
  }

  warning() {
    this.productForm.controls.name.markAsTouched();
    this.productForm.controls.description.markAsTouched();
  }

  addProduct() {

    this.productApi.addProduct(this.productForm.value).subscribe(response => {
      console.log(response);
      this.close();
    })

  }

  close(): void {
    this.dialogRef.close();
  }


}
