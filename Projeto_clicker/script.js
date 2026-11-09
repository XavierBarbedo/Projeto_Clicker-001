function touching() {
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);

    //var upgrade multiplier

    pacotes += 1;

    document.getElementById("pontos").innerHTML = pacotes;

}


function upgrade() {
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);

    let nivel_placa = parseInt(document.getElementById("nível_placa").innerHTML);

    let preco;

    let price_modifier = 5.6967;


    if (nivel_placa == 0) {
        preco = 5;
    } else {
        preco = Math.ceil(price_modifier ** nivel_placa);
    }






    if (pacotes >= preco) {
        pacotes -= preco;
        nivel_placa += 1;
        document.getElementById("nível_placa").innerHTML = nivel_placa;
        document.getElementById("pontos").innerHTML = pacotes;


        preco = Math.ceil(price_modifier ** nivel_placa);
        document.getElementById("Shop_Placa").value = " Placa de rede: " + preco + " pacotes";
    }

}

function farmar () 
{
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);


        pacotes += PlacaDeRede();
        document.getElementById("pontos").innerHTML = pacotes;

    return;
}

function PlacaDeRede(){
    let nivel_placa = parseInt(document.getElementById("nível_placa").innerHTML);
    let lucro = 1;



    return nivel_placa * lucro;
}