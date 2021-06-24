

const lastIndexOf = function (array, value) {

  
  for (let i = 0; i < array.length; i ++) {

  if (array [i] === value) {
    
    value = i;
    
  }

  
  }
 return value;
 
}
 console.log (lastIndexOf([0, 1, 4, 1, 2], 5));

