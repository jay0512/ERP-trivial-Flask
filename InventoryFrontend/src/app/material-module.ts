import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatTooltipModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatBottomSheetModule,
        MatListModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule

    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatTooltipModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatBottomSheetModule,
        MatListModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule
    ]
})
export class MatirialModule {

    constructor() {
    }

}