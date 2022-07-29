import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

import { CommentItemComponent } from './comment-item/comment-item.component';

import { DialogModule } from '../components/dialog/dialog.module';
import { ColorPanelComponent } from './color-panel/color-panel.component';
import { BoardCardComponent } from './board-card/board-card.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    BoardComponent,
    BoardCardComponent,
    CommentItemComponent,
    ColorPanelComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatExpansionModule,
    FormsModule,
    DialogModule,
    MatMenuModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
