function celcius(elem) {

    var kel = document.getElementById("kel");
    var fah = document.getElementById("fah");
    var resultK;
    var resultF;
    var data = parseInt(elem)
    resultK = data + 273.15;
    resultF = ((data * (1.8)) + 32);

    kel.value = resultK.toFixed(3).toString()
    fah.value = resultF.toFixed(3).toString()
}

function kelvin(elem1) {
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var resultC;
    var resultF;
    var data = parseInt(elem1);
    resultC = data - 273.15;
    resultF = (((data - 273.15) * (1.8)) + 32);
    cel.value = resultC.toFixed(3).toString()
    fah.value = resultF.toFixed(3).toString()
}

function fahrenheit(elem2) {
    var cel = document.getElementById("cel");
    var kel = document.getElementById("kel");
    var resultC;
    var resultK;
    var data = parseInt(elem2);
    resultC = ((data - 32) * (5 / 9));
    resultK = (((data - 32) * (5 / 9)) + 273.15);
    cel.value = resultC.toFixed(3).toString()
    kel.value = resultK.toFixed(3).toString()
}

function remove() {
    document.getElementById("cel").value = " "
    document.getElementById("kel").value = " "
    document.getElementById("fah").value = " "
}