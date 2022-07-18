import { BoardService } from './../../services/board.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    public boardService: BoardService
  ) { }

  ngOnInit(): void {
    console.log('Board - INIT')
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  onDeleteComment(comment: any, columnId: any, item: any){
    this.boardService.deleteComment(columnId, item.id, comment.id)
  }

  onAddComment(event: {id: number, text: string}, columnId: number){
    this.boardService.addComment(columnId, event.id, event.text)
  }

  onChangeLike(event: {card: any, increase: boolean}, columnId: number){
    const {card: {id}, increase } = event
    this.boardService.changeLike(id, columnId, increase)
  }

  onDeleteCard(cardId: number, columnID: number){
    this.boardService.deleteCard(cardId, columnID)
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId)
  }



}
