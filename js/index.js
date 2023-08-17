// function hitung hasil BMI
function hitungBMI(){
    let gender = document.querySelector('input[name="jenis-kelamin"]:checked'); 
    let umur = document.getElementById("usia").value
    let berat = document.getElementById("berat-badan").value
    let tinggi = document.getElementById("tinggi-badan").value

    let bmi = ((berat / ((tinggi * tinggi) / 10000) )).toFixed(1)

    // validasi dan hitung BMI
    if(umur == '' || umur <=0 || berat == '' || berat <=0 || tinggi == '' || tinggi <=0 ){
        document.getElementById("warning").innerHTML = "Harap memasukkan semua data dengan baik dan benar!!"
    } else{
        document.getElementById("heading").innerHTML = "Hasil BMI :"
        document.getElementById("hasil-bmi").innerHTML = bmi
        document.getElementById("hasil-usia").innerHTML ="Usia : " + umur
        document.getElementById("warning").innerHTML = ''

        if(bmi <= 18.5){
            document.getElementById("penjelasan").innerHTML = "Kekurangan berat badan"
        } else if(bmi >= 18.5 && bmi <= 24.9){
            document.getElementById("penjelasan").innerHTML = "Normal (ideal)"
        } else if(bmi >= 25.0 && bmi <= 29.9){
            document.getElementById("penjelasan").innerHTML = "Kelebihan berat badan"
        } else if(bmi >= 30.0){
            document.getElementById("penjelasan").innerHTML = "Kegemukan (obesitas)"
        }

        if(gender != null) { 
            document.getElementById("hasil-gender").innerHTML 
                = "Gender : " + gender.value 
        } 
    }
    

    return false;
}

// function untuk reset hasil BMI
function resetBMI(){
    window.location.reload()
}
