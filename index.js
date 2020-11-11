//variabel
//let & conts
// let umur = 25;
// _umur = 26;
// let nilai = 95.5;
// let sudahMenikah = true;
// let $nama = "Jhon Doe";
// console.log(_umur);
// console.log($nama);

// let alamat;
// console.log(alamat);

// const tahunLahir = 2010;
// console.log(tahunLahir);



//Aritmatik operator(+,-,/,*)

// let angka1 = 10;
// let angka2 = 20; 
// console.log(angka1 - angka2);

// let umur = 30;
// let namaDepan ="Jhon";
// let namaBlakang ="Doe";
// console.log("Nama Saya"namaDepan + " " namaBlakang "umur saya adalah" + umur "tahun");

//operator perbandingan

// let angka1 = 10;
// let angka2 = "10";

// let hasil = anka1 === angka2;
// console.log(hasil);

// //termenary operator

// let angka = 5;
// let hasil = angka < 0 ? "negatif" : "Positif";
// console.log(hasil);

// //operator logika

// let kondisi1 = 1 > 2;
// let kondisi2 = false;

// console.log(kondisi1 || kondisi2);
// console.log(kondisi1);

//Assigment BMI

var tinggi,berat,bmi;
function hitung() {
	tinggi = parseFloat(document.getId("in_put").value);
	tinggi /= 100;
	berat = parseFloat(document.getId("in_put").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi > 27) {
		keterangan = "Gemuk, Kelebihan berat badan tingkat berat";
	}else if ((bmi >= 25.1) & (bmi <= 27)){
		keterangan = "Gemuk, Kelebihan berat badan tingkat ringan";
	}else if ((bmi >= 18.5) & (bmi <= 25)){
		keterangan = "Normal";
	} else if ((bmi >= 17) & (bmi <= 18.4)){
		keterangan = "Kurus, Kekurangan berat badan tingkat ringan";
	}else {
		keterangan = "Kurus, Kekurangan berat badan tingkat berat";
	}
	document.getId('bmi').innerHTML = "Hasil perhitungan BMI : " + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = keterangan;
}

