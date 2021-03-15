import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationAPIService } from '../services/location-api.service';
import { AddLocationComponent } from './add-location/add-location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { Location } from 'src/beans/Location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Location[] = [];

  constructor(private locationApi: LocationAPIService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.locationApi.getLocations().subscribe(locations => {
      console.log(locations);
      this.locations = locations;
    });
  }
  addDialog(): void {
    const dialogRef = this.dialog.open(AddLocationComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLocations();
    });
  }

  editDialog(location: Location): void {
    const dialogRef = this.dialog.open(EditLocationComponent, {
      width: '550px',
      data: location
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLocations();
    });
  }

}
