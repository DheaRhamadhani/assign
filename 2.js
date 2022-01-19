let harga = [3000,10000,4500,5000]
let Jumlah = [20,8,10,5]
let total = 0

for (let i = 0; i < harga.length; i++) {
    total += harga[i]  *Jumlah[i]
    }  


    console.log(`total = ${total}`);
