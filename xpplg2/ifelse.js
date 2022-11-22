// deklarasi bilangan
var panggilUntukInput = require("readline-sync");
var bilangan = panggilUntukInput.question("Input Bilangan: ");
var sisa_bagi = bilangan % 2;

if (isNaN(bilangan || sisa_bagi)) {
    console.log('Yang Anda Masukkan Bukan Angka');   
} else {
    if (sisa_bagi == 0 )
{
    console.log("BILANGAN GENAP");
} else {
    console.log("BILANGAN GANJIL");
}
}