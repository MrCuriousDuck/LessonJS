const basket = [{ price: 1500 }, { price: 25 }, { price: 100 }, { price: 10 }, { price: 500 }];

// let myVar = 'Привет мир';

// let myVarCode = btoa(myVar);

// console.log(myVarCode);

// let myVarDecode = atob(myVarCode);

// console.log(myVarDecode);

// пример кодирования строки
console.log('\nпример кодирования строки\n');

var txt = 'I Love JavaScript!';
var result = 'Исходная строка: ' + txt;
result += '\n\n';
var encode = btoa(txt);
result += 'Закодированная строка: ' + encode;
result += '\n\n';
var decode = atob(encode);
result += 'Декодированная строка: ' + decode;
console.log(result);

1;
