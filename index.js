//1
function sumOfFourAndSix(){
      let sum = 0
    for(let i = 1; i <= 1000; i++){
        if(i % 4 === 0 && i % 6 ===0){
            sum += i;
        }
    }
    return sum
}

//2
function oddAndEvenInFifteen(){
    for(let i = 0; i <= 15; i++) {
      if(i % 2 === 0) {
    console.log(i + " is even");
      } else {
    console.log(i + " is odd");
      }
  }
}

//3
// function assignGrade(num){
//   if(num >= 91 && num <= 100){
//       console.log("A")
//   }else if(num >= 81 && num <= 90){
//       console.log("B")
//         }else if(num >=71 && num <= 80){
//             console.log("C")
//         // }else if(num =)
// }

console.log(sumOfFourAndSix())
console.log(oddAndEvenInFifteen())
// console.log(assignGrade(95))



