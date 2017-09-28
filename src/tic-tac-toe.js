class TicTacToe {
    constructor() {
         this.curSym = 'x'; // символ, который будет поставлен следующим
	     this.nextSym = 'o'; // символ, только что поставленный
	     this.arr = [[null,null,null],[null,null,null],[null,null,null]]; // иницилизация массива значениями null
	     this.count = 0; // счетчик заполненных ячеек
    }

    getCurrentPlayerSymbol() {
        return this.curSym;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.arr[rowIndex][columnIndex] === null) { // если ячейке еще не присвоено новое значение
			this.arr[rowIndex][columnIndex] = this.curSym; 
			this.curSym = this.nextSym; // переключение символа
			this.nextSym = this.arr[rowIndex][columnIndex]; 
			this.count++;
        }
	}

    isFinished() {
         if(this.getWinner() != null || this.isDraw() == true) { 
			 return true;
		 }
		 return false;
    }

    getWinner() {
		
		if (this.arr[0][0] === this.nextSym && this.arr[1][1] === this.nextSym && this.arr[2][2] === this.nextSym) return this.nextSym; // значение ячеек по основной диагонали матрицы должно быть равным
		else if	(this.arr[2][0] === this.nextSym && this.arr[1][1] === this.nextSym && this.arr[0][2] === this.nextSym) return this.nextSym; // значение ячеек по побочной диагонали матрицы должно быть равным
        for (var i = 0; i < 3; i++) {
				if (this.arr[i][0] === this.nextSym && this.arr[i][1] === this.nextSym && this.arr[i][2] === this.nextSym) { // значение ячеек в одной из строк матрицы должно быть равным
					return this.nextSym;
				}
				 else if (this.arr[0][i] === this.nextSym && this.arr[1][i] === this.nextSym && this.arr[2][i] === this.nextSym) { // значение ячеек в одном из столбцов матрицы должно быть равным
					return this.nextSym;
				}
		}
		
		return null;

	}

    noMoreTurns() {

        if (this.count === 9) { 
			return true;
		}
		return false;

    }

    isDraw() {
		    if (this.count === 9 && this.getWinner() == null) { // в случае когда поля матрицы закончились, а победитель не найден
			     return true;
		    }
			return false;
    }

    getFieldValue(rowIndex, colIndex) { 
       return this.arr[rowIndex][colIndex]; 
    }

	
}
module.exports = TicTacToe;
