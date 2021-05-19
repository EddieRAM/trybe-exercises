let chessPiece = "knight"


switch (chessPiece) {
  case "king":
    console.log("every direction, one square");
      break;
  case "pawn":
    console.log("vertically, one square or two, one time only");
      break;
  case "queen":
    console.log("every direction, any number of squares");
      break;
  case "bishop":
    console.log("diagonally, any number of squares");
      break;
  case "rook":
    console.log("horizontally or vertically, any number of squares");
      break;
  case "knight":
    console.log("L shape, horizontally and vertically: 2 squares, then 1");
      break;
  default:
    console.log("Error")
}

