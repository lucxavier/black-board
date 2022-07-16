import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private initBoard = [
    {
      id: 1,
      title: 'Backlog',
      color: '#ccc',
      list: [
        {
          id: 1,
          text: 'Exemplo de item do card',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'Algum comentário'
            }
          ]
        },
        {
          id: 2,
          text: 'Exemplo 2222 de item do card',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'Algum comentário'
            }
          ]
        },
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      color: '#009886',
      list: [
        {
          id: 2,
          text: 'Exemplo de item do card em Desenvolvimento',
          like: 3,
          comments: [
            {
              id: 1,
              text: 'Algum comentário 1'
            },
            {
              id: 2,
              text: 'Algum comentário 2'
            },
            {
              id: 3,
              text: 'Algum comentário 3'
            },
          ]
        },
      ]
    },
  ]

  private board: any[] = this.initBoard;
  private board$ = new BehaviorSubject<any[]>(this.initBoard)

constructor() { }

  getBoard(){
    return this.board$.asObservable()
  }

  deleteComment(columnId: any, itemId: any, commentId: any){
    this.board = this.board.map((column) => {
      if(column.id === columnId){
        const list = column.list.map((item: { id: any; comments: any[]; }) => {
          if(item.id === itemId){
            item.comments = item.comments.filter((comment: { id: any; }) => {
              return comment.id !== commentId
            })
          }
          return item
        })
        column.list = list
      }
      return column
    })
    this.board$.next([...this.board])
  }

  addComment(columnId: number, cardId: number, text: string){
    this.board = this.board.map((column: any) => {
      if(column.id === columnId){
        const list = column.list.map((card: any) => {
          if(card.id === cardId){
            const newComment = {
              id: Date.now(),
              text,
            }
            card.comments = [newComment, ...card.comments];
          }
          return card;
        })
        column.list = list;
      }
      return column
    })
    this.board$.next([...this.board]);
  }

  changeLike(cardId: number, columnId: number, increase: boolean){
    this.board = this.board.map((column) => {
      if(column.id === columnId){
        const list = column.list.map((card: { id: any; like: number; }) => {
          if(card.id === cardId){
            if(increase){
              card.like++
            }else{
              if(card.like > 0){
                card.like--;
              }
            }
          }
          return card;
        })
        column.list = list;
        return column
      }else{
        return column
      }
    })
    this.board$.next([...this.board])
  }

}
