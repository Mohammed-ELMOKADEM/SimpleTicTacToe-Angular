import { Component } from '@angular/core';
import { GameStateService } from '../services/game-state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(public gameState : GameStateService){}


  public winning(player : String) : String{
    let winByRow : boolean = false;
    let winByColumn : boolean = false;
    let winByDiagonal : boolean = false
    let winner : String ="";
    let currentBoard1 : String[][] = this.gameState.currentPlayState.currentBoard.Player1;
    let currentBoard2 : String[][] = this.gameState.currentPlayState.currentBoard.Player2;
    if(player == "Player 1"){
      winByRow = this.rowCheck(currentBoard1);
      winByColumn = this.columnCheck(currentBoard1);
      winByDiagonal = this.diagonalCheck(currentBoard1);
      if(winByRow || winByColumn || winByDiagonal){
        this.gameState.setGameState({
          gameOver : true,
          winner : "Player 1"
        })
      }
    }
    else{
      winByRow = this.rowCheck(currentBoard2);
      winByColumn = this.columnCheck(currentBoard2);
      winByDiagonal = this.diagonalCheck(currentBoard2);
      if(winByRow || winByColumn || winByDiagonal){
        this.gameState.setGameState({
          gameOver : true,
          winner : "Player 2"
        })
      }
    }

    return winner;
  }

  private rowCheck(board : String[][]) : boolean{
    let result : boolean = false;
    board.forEach(row => {
      let count : number = 0;
      row.map((play)=>{
        if(play != ""){
          count +=1;
        }
      })
      if(count == 3){
        result = true
      }
    });
    return result;
  }

  private columnCheck(board : String[][]) : boolean{
    board = this.transposeArray(board);
    let result : boolean = false;
    board.forEach(row => {
      let count : number = 0;
      row.map((play)=>{
        if(play != ""){
          count +=1;
        }
      })
      if(count == 3){
        result = true
      }
    });
    return result;
  }

  private diagonalCheck(board : String[][]): boolean{
    let result : boolean = false;
    if(board[1][1] != ""){
      if(board[0][0] != "" && board[2][2] != ""){
        result = true;
      }
      else if(board[0][2] != "" && board[2][0] != ""){
        result = true;
      }
    }
    return result;
  }

  private transposeArray(array: String[][]): String[][] {
    const rows = array.length;
    const cols = array[0].length;
    const transposedArray: String[][] = [];
  
    for (let j = 0; j < cols; j++) {
      transposedArray[j] = [];
      for (let i = 0; i < rows; i++) {
        transposedArray[j][i] = array[i][j];
      }
    } 
    return transposedArray;
  }
  
}
