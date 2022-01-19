let data = [
   { nama: "Dhea", bb:60, tb:1.5},
   { nama: "Essa", bb :55, tb:1.8},
   { nama: "Fazila", bb:90, tb:1.6},
   {nama: "Debbi", bb:40, tb:1.6},
   {nama: "Faiza", bb:30, tb:1.4}
]

let kurangBB =[], normal =[]
let obesitas =[], LebihBB =[]

for (let i = 0; i < data.length; i++) {
    let bmi = data[i].bb / (data[i].tb * data[i].tb)
    if (bmi < 18.5) {
        kurangBB.push(data[i].nama)
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        normal.push(data[i].nama)
    }
    if (bmi >= 25 && bmi <= 29.9) {
        LebihBB.push(data[i].nama)
    }
    if (bmi >= 30) {
        obesitas.push(data[i].nama)
    }
}

console.log(`Data Kurang BB = ${kurangBB}`);
console.log(`Data Normal = ${normal}`);
console.log(`Data Lebih BB = ${LebihBB}`);
console.log(`Data Obesitas = ${obesitas}`);

