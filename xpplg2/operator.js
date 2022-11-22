let a = 5,
    b = 10,
    c = 20

console.log(a = 8);
// output 8
// karena dalam kurung maka nilai a boleh di assigment ulang jadi 8 
console.log(a == 5);
// output false
// apakah nilai a sama d engan 5? tidak karena sudah di assignment nilai a = 8
console.log(a === '8');
// output false
// karena nilai a = 8 merupakan tipe data number/integer
// sedangkan tipe perbandingan nilai '8' merupakan tipe data string
// sehingga ketika dibandingkan 8 === '8' bernilai sama tapi mempunyai tipe data yang berbeda
console.log(8 === 8);
// output true
// karena 8 sama dengan 8
console.log(8 !== '8');
// output true
// karena 8 tidak sama dengan '8'
console.log(8 != '8');
// output false
// apakah value 8 tidak sama dengan value 8?
// karena kalau sama dengannya 1 maka string nya tidak fibaca