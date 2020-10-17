module.exports = function reverse (n) {
     let concat='';
     let mas=n.toString();
  for(let i=0; i<mas.length; i++){
      if(mas[i]==='-'){
          continue;
      }
    concat=mas[i]+concat;
  }
  return concat;
}
