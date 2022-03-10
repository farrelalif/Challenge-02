//nomor 1
console.log("nomor 1");

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan menggambarkan besarnya cintaku padamu";

const changeWord = (selectedText, changeText, text) => {
    const changeWord = text.replace(selectedText, changeText);

    return changeWord;
}

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));




//Nomor 2
console.log("-----------------------------------------------------");
console.log("nomor 2");

const checkTypeNumber = (givenNumber) =>
{
    if(typeof givenNumber === "number")
    {
        if  (givenNumber % 2 === 1){
            return "ganjil";
        }   else {
            return "genap";
        }
    } else if (givenNumber == null) {
        return "ERROR:  Bro where is the parameter?";
    } else {
        return "ERROR: Invalid data type";
    }
};
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());




//nomor 3
console.log("-----------------------------------------------------");
console.log("nomor 3");

function checkEmail(email)
{
    if (/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email)) {
        return "VALID";
    } else if (/^(?=.*\s)/.test(email) || email == "") {
        return "tidak boleh kosong";
    } else {
        return "INVALID";
    }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail(""));




//nomor 4
console.log("-----------------------------------------------------");
console.log("nomor 4");

function isValidPassword (password)
{
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)) {
        return true;
    } else if (
    /^(?=.*\s)/.test(password) ||
    password == "" ||
    password == 0 ||
    password == null
    ) {
        return "tidak boleh kosong";
    } else {
        return false;
    }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword('0'));
console.log(isValidPassword());




//nomor 5
console.log("-----------------------------------------------------");
console.log("nomor 5");

const getSplitName = (personName) =>
{
    const nameArr = personName.split(" ");
    if (nameArr.length > 2) {
        const obj = {
            firstName: nameArr[0],
            middleName: nameArr[1],
            lastName: nameArr[nameArr.length -1],
        };
        return obj;
    } else if (nameArr.length > 3) {
        return "Error: this function is only for 3 character name";
    } else if (nameArr.length > 1) {
        const obj = {
            firstName: nameArr [0],
            lastName: nameArr [nameArr.length -1],
        };
        return obj;
    } else if (nameArr.length == 1) {
        const obj = {
            firstName: nameArr[0],
        };
        return obj;
    } else {
        return "nama belum diisi";
    }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
//console.log(getSplitName(0));




//nomor 6
console.log("-----------------------------------------------------");
console.log("nomor 6");

const getAngkaTerbesarKedua = (submitValue) => {
    if (Array.isArray(submitValue)) {
        const ArrValue = submitValue.sort(function (a, b){
            return b-a;
        });
        return console.log(
         `Angka teerbesar pertama ${ArrValue[0]} dan angka terbesar kedua ${ArrValue[1]}`
        );
    } else {
        return "ERROR ; value bukan Array"
    }
};


const dataAngka = [9, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());




//nomor 7
console.log("-----------------------------------------------------");
console.log("nomor 7");

const dataPenjualanPakAdi = 
[
    {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8 ",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual:90,
    },
    {
    namaProduct: "Sepatu Warrior Tristan Black Brown High ",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual:37,
    },
    {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sport",
    totalTerjual:90,
    },
    {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy ",
    hargaSatuan: 120000,
    kategori: "Sepatu Sport",
    totalTerjual:90,
    },
];

const hitungTotalPenjualan = () =>
{
    const total = dataPenjualanPakAdi
    .map ((a) => newArr = a.totalTerjual)
    .reduce((acc, curr) => acc + curr);
    return total
};
console.log(hitungTotalPenjualan(dataPenjualanPakAdi));



//nomor 8
console.log("-----------------------------------------------------");
console.log("nomor 8");

const dataPenjualanNovel = 
[
    {
        idProduct: 'BOOK002421',
        namaProduct: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002351',
        namaProduct: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduct: 'Garis Waktu',
        penulis: 'Tere Liye',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduct: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

const totalHargaBeli = dataPenjualanNovel
.map((data) => data.hargaBeli * data.totalTerjual)
.reduce((acc, curr) => acc + curr);
console.log("total harga beli:", totalHargaBeli);

const totalHargaJual = dataPenjualanNovel
.map((data) => data.hargaJual * data.totalTerjual)
.reduce((acc, curr) => acc + curr);
console.log("total harga Jual:", totalHargaJual);

const untung = totalHargaJual - totalHargaBeli ;
console.log("untungnya:", untung);

const persenUntung = (totalHargaBeli / totalHargaJual) * 100;
console.log("persen untungny:", persenUntung);

const prodkBukuTerlaris = dataPenjualanNovel.map((data) => {
    let newTotalTerjual = data.totalTerjual;
    return newTotalTerjual;
});
const penjualanTerbanyak = Math.max(...prodkBukuTerlaris);
console.log("penjualan terbanyak:", penjualanTerbanyak);

const siapaPenjualnya = () => {
    const penjualnyaNih = dataPenjualanNovel.find(
        (x) => x.totalTerjual == penjualanTerbanyak
    );
    return penjualnyaNih;
};
const objNovel = {
    totalKeuntungan: `Rp ${untung}`,
    totalModal: `Rp ${totalHargaBeli}`,
    persentaseKeuntungan: persenUntung,
    produkBukuTerlaris: siapaPenjualnya().namaProduct,
    penulisTerlaris: siapaPenjualnya().penulis,
};
console.log(objNovel);