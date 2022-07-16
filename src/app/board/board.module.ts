import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { BoardCardComponent } from './board-card/board-card.component';
import { FormsModule } from '@angular/forms';
import { CommentItemComponent } from './comment-item/comment-item.component';



@NgModule({
  declarations: [
    BoardComponent,
    BoardCardComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule
  ],
  exports:[
    BoardComponent
  ]
})
export class BoardModule { }
