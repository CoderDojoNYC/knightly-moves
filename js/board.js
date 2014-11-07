  	
	var board = new ChessBoard('board');


  	var defaultb = function () {
      var example = {
      a4: 'bK',
      c4: 'wK',
      a7: 'wR'
     };
    board.position(example);
  	};
  

  	$(document).ready(defaultb);

  	


    var exampleLevel1 = function () {
      var example = {
      a4: 'bK',
      c4: 'wN',
      a7: 'wR'
     };
      board.position(example);
    };

    $('#Start').on('click', exampleLevel1);
