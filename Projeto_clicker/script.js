function touching() {
    var pacotes = parseInt(document.getElementById("pontos").innerHTML);

    //var upgrade multiplier

    pacotes += 1;

    document.getElementById("pontos").innerHTML = pacotes;

}


function upgrade() {
    var pacotes = parseInt(document.getElementById("pontos").innerHTML);

    var nivel_placa = parseInt(document.getElementById("nível_placa").innerHTML);

    var preco;

    var price_modifier = 5.6967;


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
    var pacotes = parseInt(document.getElementById("pontos").innerHTML);
    var nivel_placa = parseInt(document.getElementById("nível_placa").innerHTML);    


        pacotes += nivel_placa * 1;
        document.getElementById("pontos").innerHTML = pacotes;

    setInterval(farmar,1000);

    return;
}