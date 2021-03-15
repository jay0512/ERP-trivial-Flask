import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { LocationAPIService } from 'src/app/services/location-api.service';
import { Location } from 'src/beans/Location';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {

  locationForm;
  constructor(
    public dialogRef: MatDialogRef<AddLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Location, private formBuilder: RxFormBuilder, private locationApi: LocationAPIService) {
    console.log(data);
    this.locationForm = this.formBuilder.group(new Location(0, '', ''));

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

  addlocation() {

    this.locationApi.addLocation(this.locationForm.value).subscribe(response => {
      console.log(response);
      this.close();
    })

  }

  close(): void {
    this.dialogRef.close();
  }


}
