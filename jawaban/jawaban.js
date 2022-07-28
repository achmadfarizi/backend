//No 1

var stringIn = 'NEGIE1';
var rev = stringIn.replace(/[^0-9]+/gi, function(s){return s.split('').reverse().join('')});
console.log(rev)

/*=====================================*/
//no2

function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
findLongestWord("Saya sangat senang mengerjakan soal algoritma");


/*======================================*/
//no3


input = ['xc', 'dz', 'bbb', 'dz']  
query = ['bbb', 'ac', 'dz']


for(let i = 0; i < query.length; i++) {
    matches = 0;
    for(let j = 0; j < input.length; j++) {
    if(query[i] == input[j]) {
        matches++;
    }
  }
  console.log(query[i] + ' ' + matches)
}




/*=====================================*/
//no4 
function sumDiagonal(matrix) {

  let firstSum = 0, secondSum = 0;
  for (let row = 0; row < matrix.length; row++) {
      firstSum += matrix[row][row];
      secondSum += matrix[row][matrix.length - row - 1];
  }
  console.log(firstSum + ' ' + secondSum);
  console.log(firstSum-secondSum);
}

sumDiagonal([[1, 2, 0], [4, 5, 6], [7, 8, 9]]);