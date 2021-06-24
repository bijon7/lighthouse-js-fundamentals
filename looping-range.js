const range = function (start, end, step) {
  let array = [];
  let i = 0;
 while (end >= start && step > 0) {
 array [i] = start;
 array.push (array [i]);
 start += step;
 i++;
 }
return array;
}
console.log (range (1, 15, 2));



