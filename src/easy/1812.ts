function squareIsWhite(coordinates: string): boolean {
  return (coordinates.charCodeAt(0) + coordinates.charCodeAt(1)) % 2 === 1;
}

console.log(squareIsWhite("a1"));
console.log(squareIsWhite("h3"));
console.log(squareIsWhite("c7"));

// https://leetcode.com/problems/determine-color-of-a-chessboard-square/
