let massiv = [2, 2, 4, 1, 3];
let sredn = 0;
let result = 0;
massiv.forEach(element => {
    sredn += element;
});
sredn = Math.round(sredn/massiv.length);
massiv.forEach(element => {
    result += Math.abs(sredn-element);
});
console.log(result)