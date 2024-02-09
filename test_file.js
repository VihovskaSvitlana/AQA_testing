//оголошення за допомогою літералів
const numberFirst = 5;
const numberSecond = 2.11;
const inf =  Infinity;

const text  = 'abcd';

console.log(isNaN(text));
console.log(isNaN(numberFirst));
console.log(inf  + numberFirst);

const str1 = 'aaa';
const str2 = "bbb";
const str3 = `ccc ${inf} result  of ${2+1}`;

const textMulti = `
line 1
line 2
    ....
line n`;
console.log (str3);
console.log(textMulti);

let empty;
console.log(empty ); // undefined

const mySymbol = Symbol();
const identificator = Symbol("myId");
console.log(identificator.toString())

const bigInt1 = 2345676n;
const bigInt2  = BigInt(567365736);
const bigInt3 = BigInt("76567865");

console.log(typeof(empty));
console.log(typeof(mySymbol));

//оголошення за допомогою оператора  New

const var1 = new String("aaaa");
const var2  = new Number(12345);
const var3 =  new Boolean(true);
