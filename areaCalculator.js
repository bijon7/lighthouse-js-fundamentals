const calculateRectangleArea = function (length, width) {
  if (length >= 0 && width >= 0) {
    let area = length * width;
    return area;
  }

}

const calculateTriangleArea = function (base, height) {
  if (base >= 0 && height >= 0) {
    let area = base * height/2;
    return area;
  }
}

const calculateCircleArea = function (radius) {
  if (radius >= 0) {
    let area = Math.PI * radius * radius;
    return area;
  }
}
console.log (calculateRectangleArea (10,5));
console.log (calculateRectangleArea (1.5, 2.5));
console.log (calculateRectangleArea (10, -5));

console.log(calculateTriangleArea(10, 5)); 
console.log(calculateTriangleArea(3, 2.5)); 
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10)); 
console.log(calculateCircleArea(3.5)); 
console.log(calculateCircleArea(-1)); 




