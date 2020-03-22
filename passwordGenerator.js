function changeVocals (str) {
  //code di sini
  var arrStr = [];
  var strStr = "";
  for (var i = 0; i < str.length; i++) {
    arrStr.push(str[i]);
  }
  // console.log(arrStr);

  for (var i = 0; i < arrStr.length; i++) {
    switch (arrStr[i]) {
      case "a":
        arrStr[i]= "b";
        strStr+= arrStr[i];
      break;
      case "i":
        arrStr[i]= "j";
        strStr+= arrStr[i];
      break;
      case "u":
        arrStr[i]= "v";
        strStr+= arrStr[i];
      break;
      case "e":
        arrStr[i]= "f";
        strStr+= arrStr[i];
      break;
      case "o":
        arrStr[i]= "p";
        strStr+= arrStr[i];
      break;
      case "A":
        arrStr[i]= "B";
        strStr+= arrStr[i];
      break;
      case "I":
        arrStr[i]= "J";
        strStr+= arrStr[i];
      break;
      case "U":
        arrStr[i]= "V";
        strStr+= arrStr[i];
      break;
      case "E":
        arrStr[i]= "F";
        strStr+= arrStr[i];
      break;
      case "O":
        arrStr[i]= "P";
        strStr+= arrStr[i];
      break;
      default:
      strStr+=arrStr[i];
    }
  }
  return strStr;
}

function reverseWord (str) {
  var arrStr = [];
  var strStr = "";
  for (var i = 0; i < str.length; i++) {
    arrStr.push(str[i]);
  }
  for (var j = arrStr.length -1; j >=0; j--) {
    strStr+= arrStr[j];
  }
  return strStr;
}

function setLowerUpperCase (str) {
  var arrStr = [];
  var hurufKecil = "abcdefghijklmnopqrstuvwxyz";
  var hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var strStr = "";

  for (var i = 0; i < str.length; i++) {
    arrStr.push(str[i]);
  }

  for (var j = 0; j < arrStr.length; j++) {
    for (var k = 0; k < hurufKecil.length; k++) {
      if (arrStr[j] === hurufKecil[k]) {
        strStr+=hurufBesar[k];
        break;
      }
      else if (arrStr[j] === hurufBesar[k]){
        strStr+=hurufKecil[k];
        break;
      }
    }
    if (arrStr[j]!== hurufKecil[k] && arrStr[j] !== hurufBesar[k]) {
      strStr+= arrStr[j];
    }
  }
  return strStr;
}
function removeSpaces (str) {
  var arrStr = [];
  var strStr = "";

  for (var i = 0; i < str.length; i++) {
    arrStr.push(str[i]);
  }

  for (var j = 0; j < arrStr.length; j++) {
    if (arrStr[j] !== " ") {
      strStr+=arrStr[j];
    }
  }
  return strStr;
}
// console.log(removeSpaces("Ab CdE"));
//
function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  else {
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  }
}
//
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
