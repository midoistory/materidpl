// deklarasi bilangan ganjil dan genap
var panggilUntukInput = require('readline-sync');
var Bilangan = panggilUntukInput.question("Input bilangan? ");

// sisa_bagi = bilangan % 2
var sisa_bagi = bilangan % 2;
// akhir proses sisa bagi

//pengkondisian atau condisional
if (sisa_bagi == 0)

// jikan statement diatas bernilai true maka lakukan baris program ini
console.log("BILANGAN GENAP");
else 
// jika statement diatas bernilai false maka lakukan baris program ini
console.log("BILANGAN GANJIL");