function sorting(arrNumber) {
  for (var i = 0; i < arrNumber.length; i++) {
    for (var j = 0; j < arrNumber.length; j++) {
      if (arrNumber[j] > arrNumber[j+1]) {
        var temp = arrNumber[j];
        arrNumber[j] = arrNumber[j+1];
        arrNumber[j+1]= temp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  var biggestVal = 0;
  var maxCount = 0;
  var limit = arrNumber.length

  for (var i = 0; i < limit; i++) {
    var count = 0;
    for (var j = 0; j < limit; j++) {
      if (arrNumber[i] > arrNumber[j+1]) {
        biggestVal = arrNumber[j];
      }
      else {
        biggestVal = arrNumber[j+1];
        arrNumber[j+1]= arrNumber[i];
        arrNumber[i] = biggestVal;
      }
    }
  }
  for (var j = 0; j < arrNumber.length; j++) {
    if (biggestVal === arrNumber[j]) {
      count++;
    }
  }
  if (arrNumber.length > 0) {
    return "angka paling besar adalah " + biggestVal + " dan jumlah kemunculan sebanyak " + count;
  }
  else {
    return "\"\"";
  }

  // for (var i = 0; i < arrNumber.length; i++) {
  //   var count = 0;
  //   for (var j = 0; j < arrNumber.length; j++) {
  //     if (arrNumber[j]=== arrNumber[i]){
  //       count++;
  //     }
  //   }
  //   if (count > maxCount) {
  //       maxCount = count;
  //       maxVal = arrNumber[i];
  //   }
  //   else if (maxCount === arrNumber.length) {
  //     maxVal = -1;
  //   }
  //   else if (maxCount === 1) {
  //     maxVal = -1;
  //   }
  // }
  // return "angka paling besar adalah " + maxVal + " dan jumlah kemunculan sebanyak " + maxCount;
}
// console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
//
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
