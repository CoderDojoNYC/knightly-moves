  	
	var board;


  	var empty = function () {
		board = new ChessBoard('board');
  	};

  	$(document).ready(empty);


  	function makePlayer(board, position){
  		board.position(position);
  	}


    var example = {
      a4: 'bK',
      c4: 'wK',
      a7: 'wR'
    };
    $('#setStartBtn').on('click', makePlayer(board,example));
