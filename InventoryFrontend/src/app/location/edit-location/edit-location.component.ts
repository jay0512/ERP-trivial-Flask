import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { plainToClass } from 'class-transformer';
import { LocationAPIService } from 'src/app/services/location-api.service';
import { Location } from 'src/beans/Location';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent {

  locationForm;
  constructor(
    public dialogRef: MatDialogRef<EditLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Location, private formBuilder: RxFormBuilder, private locationApi: LocationAPIService) {
    console.log(data);
    this.locationForm = this.formBuilder.group(plainToClass(Location, data));

    this.locationForm.controls.name.setValidators([RxwebValidators.required()])
    console.log(this.locationForm);

  }

  validate() {
    return this.locationForm.controls.name.valid && this.locationForm.controls.description.valid
  }

  warning() {
    this.locationForm.controls.name.markAsTouched();
    this.locationForm.controls.description.markAsTouched();
  }

  updateLocation() {

    this.locationApi.updateLocation(this.locationForm.value).subscribe(response => {
      console.log(response);
      this.close();
    })

  }

  close(): void {
    this.dialogRef.close();
  }


}
