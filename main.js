var myNum = 10;

var myStr = 'строка';

var myBool = true;

var myArr = [1, 2, 3, 4, 5];

var myObj = {
    first: 'First Name',
    last: 'Last Name'
};

var decimal2 = myNum.toFixed(2);

var i = 0;
console.log(++i);
console.log(i++);
console.log(--i);
console.log(i--);


var myTest = 20;

console.log( myTest += 1);
console.log( myTest -= 1);
console.log( myTest *= 1);
console.log( myTest /= 1);
console.log( myTest %= 4);


var myPi = Math.PI;
console.log(myPi)

var myRound = Math.round(89.279);

var myRandom = Math.random()*10;

var myPow = Math.pow(3,5)

var strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: null,
    showLength () {
    this.length = this.str.length;
    },
    strReplace (str, value) {
        return this.str.replace(str, value)
    }
}

strObj.showLength (this.str);

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

var strReplace = strObj.strReplace('мыла раму, рама мыла', 'моет раму, Рама держит');

var lastString = 'AsSjkSAkfwankSAFKJfnkj'

lastString.toUpperCase();
lastString.toLowerCase();


