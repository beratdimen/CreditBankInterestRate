// KREDİ FAİZ UYGULAMASI

let krediSecenekleri = Number(prompt("1-50.000 TL - 12 Ay \n 2-50.000 TL - 24 AY \n 3-100.000 TL - 12 AY \n 4- 100.000 TL - 24 AY"));

if (krediSecenekleri == 1) {
    let krediTutari = 50000;
    let ay = 12;
    let faizOrani = 1.99;
    let faizTutari = (krediTutari / 100) * (faizOrani) * ay;
    let toplamOdenecekTutar = krediTutari + faizTutari;
    let aylikOdenecekTutar = toplamOdenecekTutar / ay;
    console.log("Bu seçiminizin faiz tutarı:" + faizOrani);
    console.log("Toplam Ödenecek Tutar:" + toplamOdenecekTutar);
    console.log("Aylık Ödemeniz Gereken Tutar:" + aylikOdenecekTutar);

} else if (krediSecenekleri == 2) {
    let krediTutari = 50000;
    let ay = 24;
} else if (krediSecenekleri == 3) {
    let krediTutari = 100000;
    let ay = 12;
    let faizOrani = 2.19;
    let faizTutari = (krediTutari / 100) * (faizOrani) * ay;
    let toplamOdenecekTutar = krediTutari + faizTutari;
    let aylikOdenecekTutar = toplamOdenecekTutar / ay;
    console.log("Bu seçiminizin faiz tutarı:" + faizOrani);
    console.log("Toplam Ödenecek Tutar:" + toplamOdenecekTutar);
    console.log("Aylık Ödemeniz Gereken Tutar:" + aylikOdenecekTutar);

} else if (krediSecenekleri == 4) {
    let krediTutari = 100000;
    let ay = 24;
} else {
    alert("Hatalı Tuşlama Yaptınız!");
}

