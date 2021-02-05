let buah =[
    {
        nama: "Nanas",
        warna: "Kuning",
        namaLatin: "Ananas Comosus",
        tipeBiji: "Monokotil",
        gambarBuah: "https://cf.shopee.co.id/file/bd11b45877f71fea5a0ab6c2b6ce4e0d"
    },
    {
        nama: "Anggur",
        warna: "Ungu",
        namaLatin: "Vitis Vinifera",
        tipeBiji: "Dikotil",
        gambarBuah: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Grapes.jpg/493px-Grapes.jpg"
    },
    {
        nama: "Rambutan",
        warna: "Merah",
        namaLatin: "Nephelium Lappaceum",
        tipeBiji: "Dikotil",
        gambarBuah: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Rambutan_Nephelium_lappaceum_Whaldener_Endo.jpg/800px-Rambutan_Nephelium_lappaceum_Whaldener_Endo.jpg"
    },
    {
        nama: "Alpukat",
        warna: "Hijau",
        namaLatin: "Persea Americana",
        tipeBiji: "Dikotil",
        gambarBuah: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/250px-Persea_americana_fruit_2.JPG"
    },
    {
        nama: "Kelapa",
        warna: "Hijau",
        namaLatin: "Cocos Nucifera",
        tipeBiji: "Monokotil",
        gambarBuah: "data:image/jpeg;base64,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"
    },
    {
        nama: "Durian",
        warna: "Coklat",
        namaLatin: "Durio Zibethinus",
        tipeBiji: "Dikotil",
        gambarBuah: "https://static.republika.co.id/uploads/images/inpicture_slide/durian-membuat-panik-sebuah-kantor-pos-di_200623201553-166.jpg"
    },
    {
        nama: "Markisa",
        warna: "Coklat",
        namaLatin: "Passifiora Edulis",
        tipeBiji: "Dikotil",
        gambarBuah: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Passion_fruits_-_whole_and_halved.jpg/300px-Passion_fruits_-_whole_and_halved.jpg"
    },
    {
        nama: "Buah Naga",
        warna: "Merah",
        namaLatin: "Hylocereus Undatus",
        tipeBiji: "monokotil",
        gambarBuah: "https://cdn0-production-images-kly.akamaized.net/tyFBW1jKsXYrJq9MZMGUK4qIgvM=/640x480/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1881908/original/020157600_1518162974-familinia_dot_com.jpg"
    },
]

let buahid = document.querySelector(".namaBuah");

let display = ()=>{
    buah.forEach(item =>{

        let card = document.createElement("div");
        card.innerHTML = `
            <div class="container">
                <img height="200px" width="300px" src="${item.gambarBuah}" alt="Card image cap">
                <div>
                  <h5>${item.nama}</h5>
                </div>
                <ul>
                  <li>Warna : ${item.warna}</li>
                  <li>Nama Latin : ${item.namaLatin}</li>
                  <li>Tipe Biji : ${item.tipeBiji}</li>
                </ul>
                <br>
                <br>
            </div>
        `;
        buahid.appendChild(card);

    });
}

display();