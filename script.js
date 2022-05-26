var vd = "";
neg = false;
var m = 0;
function getValue(v){
    vd += v;
    document.getElementById("Memoria").innerText += v;
    console.log(vd);
}

function resultado(){
    if(vd == ""){
        m += 0;
    } else {
        if(neg){
            m -= parseInt(vd);
        } else {
            m += parseInt(vd);
        }
    }
    document.getElementById("Resultado").innerText = m;
    document.getElementById("Memoria").innerText = '';
    vd = '';
    neg = false;
    m = 0;
}

function somar(){
    if(vd == ""){
        vd = 0;
    }
    m += parseInt(vd);
    console.log(m);
    document.getElementById("Memoria").innerText += ' + ';
    vd = "";
    nef = false;
}

function subtrair(){
    if(vd == ""){
        vd = 0;
    }
    if(neg){
        m -= parseInt(vd);
    } else {
        m += parseInt(vd);
    }
    console.log(m);
    document.getElementById("Memoria").innerText += ' - ';
    vd = "";
    neg = true;
}

function limpar(){
    vd = "";
    neg = false;
    m = 0;
    document.getElementById("Memoria").innerText = '';
    document.getElementById("Resultado").innerText = '';
}