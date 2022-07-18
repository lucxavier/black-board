import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DialogComponent, DialogBodyComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports:[
    DialogComponent
  ]
})
export class DialogModule {}
