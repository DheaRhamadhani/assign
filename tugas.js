console.log('......................... no.1 ...............................')
let panjang = 20.5
let lebar = 30
let luasTanah = 0
let hargaTanah = 1500000
let total = 0
let ppn  = 0
let bayar = 0

luasTanah = panjang * lebar
total = luasTanah * hargaTanah
ppn = 15/100 * total
bayar += total + ppn

console.log(`luas Tanah = ${luasTanah} meter`);
console.log(`Total Tanah = ${total}`);
console.log(`ppn =  ${ppn}`);
console.log(`total yang harus dibayar = ${bayar}`);


console.log('......................... no.2 ...............................')
let totalHarga = 0
let Beras = 0
let Gula = 0
let Telur = 0
let Minyak Goreng = 0
let data = [
    { nama: "Beras", harga:10000, jumlah:5},
    { nama: "Gula", harga :14000, jumlah:5},
    { nama: "Telur", harga:20000, jumlah:2},
    {nama: "Minyak Goreng", harga:9000, jumlah:10},
 ]
 
 for (let i = 0; i < data.length; i++) {
     let bmi = data[i].harga / (data[i].jumlah * data[i].jumlah)
     if (bmi < 18.5) {
         totalBelanja += barang[i](jumlah[i].nama)
     }
     if (bmi >= 18.5 && bmi <= 24.9) {
         normal.push(data[i].nama)
     }
     if (bmi >= 25 && bmi <= 29.9) {
         Lebihharga.push(data[i].nama)
     }
     if (bmi >= 30) {
         obesitas.push(data[i].nama)
     }
 }
 
 console.log(`Data Kurang harga = ${kurangharga}`);
 console.log(`Data Normal = ${normal}`);
 console.log(`Data Lebih harga = ${Lebihharga}`);
 console.log(`Data Obesitas = ${obesitas}`);
 
 
