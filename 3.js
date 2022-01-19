let pecahan = [100000,50000,20000,10000,5000,2000,1000,500,200,100]
let butuhUang = 1490500
 
for (let i = 0; i < pecahan.length; i++) {
    if (butuhUang > pecahan[i] ){
        jmlUang = Math.floor(butuhUang / pecahan[i])

        butuhUang = butuhUang - (jmlUang * pecahan[i])  
        console.log(jmlUang + "lembar" + pecahan[i] );
    }
}



    