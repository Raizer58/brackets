module.exports = function check(str, bracketsConfig) {
  let elementPositionOpen, elementPositionClose;
  let strLength = str.length;
  str = str.split('');

  out:
  for (let i = 0; i < bracketsConfig.length; i++){
    for (let j = 0; j < strLength; j++){
      if(bracketsConfig[i][0] !== bracketsConfig[i][1]){
        if (str.lastIndexOf(bracketsConfig[i][0]) !== -1){ //работа при разных открывающей и закрывающей скобках
          elementPositionOpen = str.lastIndexOf(bracketsConfig[i][0]);
          if (str[str.indexOf(bracketsConfig[i][1], elementPositionOpen)] == bracketsConfig[i][1]){
            elementPositionClose = str.indexOf(bracketsConfig[i][1], elementPositionOpen);
            if (elementPositionOpen % 2 == elementPositionClose % 2){ //проверка на вложенность скобок
              break out;
            }
            str.splice(elementPositionClose,1)
            str.splice(elementPositionOpen,1)
          }
        }
      }
      else {
        if (str.indexOf(bracketsConfig[i][0]) !== -1){ //работа при одинаковых открывающей и закрывающей скобках
          elementPositionOpen = str.indexOf(bracketsConfig[i][0]);
          if (str[str.indexOf(bracketsConfig[i][1], elementPositionOpen+1)] == bracketsConfig[i][1]){
            elementPositionClose = str.indexOf(bracketsConfig[i][1], elementPositionOpen+1);
            if (elementPositionOpen % 2 == elementPositionClose % 2){ //проверка на вложенность скобок
              break out;
            }
            str.splice(elementPositionClose,1)
            str.splice(elementPositionOpen,1)
          }
        }
      }
    }
  }
  return str.length == 0 ? true:false;
}
