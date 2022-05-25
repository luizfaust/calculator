var v1 = '';
var v2 = '';
var m = 0;
function getValue(v){
    v1 += v;
    document.getElementById("Memoria").innerText += v;
    console.log(v1);
}

function resultado(){
    if( v1 != ''){
        m = parseInt(v1) + parseInt(v2);
        document.getElementById("Resultado").innerText = m;
        document.getElementById("Memoria").innerText = '';
        v2 = m;
        v1 = '';
    }
}

function somar(){
    if( v1 != '' ){
        if( v2 == 0 ){
            v2 = v1;
            v1 = '';
            document.getElementById("Memoria").innerText += ' + ';
        } else {
            m += v1;
            document.getElementById("Memoria").innerText += ' + ';
        }
    }
}

function subtrair(){
    if( v1 != '' ){
        if( v2 == 0 ){
            v2 = v1;
            v1 = '';
            document.getElementById("Memoria").innerText += ' - ';
        } else {
            resultado();
            document.getElementById("Memoria").innerText += ' - ';
        }
    }
}

function limpar(){
    v1 = '';
    v2 = '';
    document.getElementById("Memoria").innerText = '';
    document.getElementById("Resultado").innerText = '';
}