// Kode javascript dibagi menjadi dua jenis, synchrounous dan asynchrounous
// synchrounous : prosesnya akan ditunggu hingga selesai, baru menjalankan kode berikutnya
// asynchrounous : prosesnya tidak ditunggu hingga selesai, langsung menjalankan kode berikutnya
    // Untuk itu, jika ada kode yang akan di running tepat setelah kode async selesai, kita menulisnya di dalam .then()

// let run = () => {
//     console.log('Kedua')
// }

// console.log('Pertama')

// setTimeout(
//     run,
//     3000
// )

// console.log('Ketiga')


// age = 30

// console.log('Umurku adalah age')
// console.log(`Umurku adalah ${age}`)


// let name = ""

// if(name){
//     console.log(`Nama saya adalah ${name}`)
// } else {
//     console.log(`Tidak memiliki nama`)
// }

// name ? console.log(`Nama saya adalah ${name}`) : console.log(`Tidak memiliki nama`)

let keyword = 'merah'
let checkBool= []

let products = [
    {
        "id": 1,
        "name": "Hoodie Red",
    },
    {
        "id": 2,
        "name": "Sandal Red",
    },
    {
        "id": 3,
        "name": "Shoes Blue",
    },
    {
        "id": 4,
        "name": "T-Shirt O",
    },
    {
        "id": 5,
        "name": "T-Shirt v",
    },
]

// forEach akan me-running function sebanyak data di array (products)
products.forEach((product) => {
    checkBool.push(product.name.toLowerCase().includes(keyword.toLowerCase()))
})


console.log(checkBool.includes(true))