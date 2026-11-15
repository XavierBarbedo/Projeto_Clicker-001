function touching() {
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);
    pacotes += GetClickPower();
    document.getElementById("pontos").innerHTML = pacotes;
}

function iniciarLoja() {
    setInterval(farmar, 1000);
}

function calcularPreco(nivel, precoInicial, multiplicador) {
    if (nivel == 0) {
        return precoInicial;
    }
    return Math.ceil(precoInicial * (multiplicador ** nivel));
}

function calcularPacotesPorSegundo() {
    return PlacaDeRede() + CaboDeFibraOtica() + Switch() + Router() + DnsServer();
}

function comprar(idNivel, idBotao, nome, precoInicial, multiplicador) {
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);
    let nivel = parseInt(document.getElementById(idNivel).innerHTML);
    let preco = calcularPreco(nivel, precoInicial, multiplicador);

    if (pacotes >= preco) {
        pacotes -= preco;
        nivel += 1;

        document.getElementById("pontos").innerHTML = pacotes;
        document.getElementById(idNivel).innerHTML = nivel;

        preco = calcularPreco(nivel, precoInicial, multiplicador);
        document.getElementById(idBotao).value = " " + nome + ": " + preco + " pacotes";

        document.getElementById("pacotesPorSegundo").innerHTML = calcularPacotesPorSegundo();
    }
}

function upgrade(mode) {
    if (mode == 1) {
        comprar("nível_placa", "Shop_Placa", "Placa de rede", 5, 5.6967);
    } else if (mode == 2) {
        comprar("nível_switch", "Shop_Switch", "Switch", 25, 5.6967);
    } else if (mode == 3) {
        comprar("nível_router", "Shop_Router", "Router", 120, 5.6967);
    } else if (mode == 4) {
        comprar("nível_dns", "Shop_DNS", "DNS Server", 600, 5.6967);
    } else if (mode == 5) {
        comprar("nível_fibra", "Shop_Fibra", "Cabo de fibra ótica", 3000, 5.6967);
    }
}

function GetClickPower() {
    
    let clickPower = parseInt(document.getElementById("nível_clique").innerHTML);
    

    
    return clickPower;
}

function atualizarClique() {


    let clickPower = parseInt(document.getElementById("nível_clique").innerHTML);
    let pacotes = parseInt(document.getElementById("pontos").innerHTML); 
    let preco = Math.pow(2, clickPower); //= formula matematica 

    document.getElementById("Shop_Clique").value = "Clique Upgrade: " + preco + " pacotes";
    
    if (pacotes >= preco)
    {
        pacotes -= preco;
        clickPower += 1;

        preco = Math.pow(2, clickPower); //= formula matematica 
        document.getElementById("Shop_Clique").value = "Clique Upgrade: " + preco + " pacotes";
    } 

      document.getElementById("nível_clique").innerHTML = clickPower;
      document.getElementById("pontos").innerHTML = pacotes;
}

function farmar() {
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);
    let pacotesPorSegundo = calcularPacotesPorSegundo();

    pacotes += pacotesPorSegundo;
    document.getElementById("pontos").innerHTML = pacotes;
    document.getElementById("pacotesPorSegundo").innerHTML = pacotesPorSegundo;
}

function comprarEficiencia(idEficiencia, idBotao, nome, precoInicial, multiplicador) {
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);
    let eficiencia = parseInt(document.getElementById(idEficiencia).innerHTML);
    let preco = calcularPreco(eficiencia - 1, precoInicial, multiplicador);

    if (pacotes >= preco) {
        pacotes -= preco;
        eficiencia += 1;

        document.getElementById("pontos").innerHTML = pacotes;
        document.getElementById(idEficiencia).innerHTML = eficiencia;

        let proximoPreco = calcularPreco(eficiencia - 1, precoInicial, multiplicador);
        document.getElementById(idBotao).value = nome + ": " + proximoPreco + " pacotes";

        document.getElementById("pacotesPorSegundo").innerHTML = calcularPacotesPorSegundo();
    }
}

function upgradeEficiencia(mode) {
    if (mode == 1) {
        comprarEficiencia("eficiencia_placa", "Shop_EficienciaPlaca", "Eficiência Placa", 50, 4.0);
    } else if (mode == 2) {
        comprarEficiencia("eficiencia_switch", "Shop_EficienciaSwitch", "Eficiência Switch", 250, 4.0);
    } else if (mode == 3) {
        comprarEficiencia("eficiencia_router", "Shop_EficienciaRouter", "Eficiência Router", 1200, 4.0);
    } else if (mode == 4) {
        comprarEficiencia("eficiencia_dns", "Shop_EficienciaDNS", "Eficiência DNS", 6000, 4.0);
    } else if (mode == 5) {
        comprarEficiencia("eficiencia_fibra", "Shop_EficienciaFibra", "Eficiência Fibra", 30000, 4.0);
    }
}

function PlacaDeRede() {
    let nivel_placa = parseInt(document.getElementById("nível_placa").innerHTML);
    let ef = parseInt(document.getElementById("eficiencia_placa").innerHTML);
    let lucro = 1;
    return nivel_placa * (lucro * ef);
}

function Switch() {
    let nivel_switch = parseInt(document.getElementById("nível_switch").innerHTML);
    let ef = parseInt(document.getElementById("eficiencia_switch").innerHTML);
    let lucro = 4;
    return nivel_switch * (lucro * ef);
}

function Router() {
    let nivel_router = parseInt(document.getElementById("nível_router").innerHTML);
    let ef = parseInt(document.getElementById("eficiencia_router").innerHTML);
    let lucro = 15;
    return nivel_router * (lucro * ef);
}

function DnsServer() {
    let nivel_dns = parseInt(document.getElementById("nível_dns").innerHTML);
    let ef = parseInt(document.getElementById("eficiencia_dns").innerHTML);
    let lucro = 60;
    return nivel_dns * (lucro * ef);
}

function CaboDeFibraOtica() {
    let nivel_fibra = parseInt(document.getElementById("nível_fibra").innerHTML);
    let ef = parseInt(document.getElementById("eficiencia_fibra").innerHTML);
    let lucro = 250;
    return nivel_fibra * (lucro * ef);
}

function iniciarSessao() {
    var nome = document.getElementById("nomeUtilizador").value.trim();

    if (nome.length < 4) {
        document.getElementById("mensagemLogin").innerHTML =
            "O nome de utilizador deve ter pelo menos 4 caracteres!";
        return;
    }

    document.getElementById("nomeApresentado").innerHTML = nome;
    document.getElementById("zonaLogin").style.display = "none";
    document.getElementById("zonaUtilizador").style.display = "block";
}

function terminarSessao() {
    document.getElementById("zonaUtilizador").style.display = "none";
    document.getElementById("zonaLogin").style.display = "block";
    document.getElementById("nomeUtilizador").value = "";
    document.getElementById("mensagemLogin").innerHTML = "";
}

/* 
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⢩⣭⣉⣀⠈⢉⣿⣯⣿⣸⣿⣿⠤⠀⢩⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣶⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣷⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻⢿⣿⣿⣿⣿⣿⣮⡻⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣈⠉⠙⣿⡆⠀⢻⣿⣿⣿⣿⣿⣳⣌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣻⣿⣿⣿⠿⢿⠿⠿⣿⣦⡘⢧⡀⢸⡿⣱⡿⠋⢻⡝⣿⣾⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠘⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣏⣯⣥⡤⢀⠀⠀⠀⣩⣩⠸⢧⣾⡏⣮⣻⣦⡀⢳⢹⣿⣿⡜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡆⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈⠊⣡⣶⣿⣿⡏⣸⣿⣿⡅⢿⣿⡟⣿⣦⡍⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡚⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢫⣾⣿⠟⠁⠀⢀⣾⣿⡿⢋⣿⠀⢻⡿⣰⣿⣞⣿⣿⡘⣿⣷⢹⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⡱⠟⠳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣿⡿⠋⠁⠀⢀⣼⣿⣿⠏⢀⣾⡇⣴⡿⣱⠃⠈⢿⣞⣿⣧⢻⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣽⣿⣿⣿⣿⣿⢻⢧⣇⠀⢸⣿⠻⣿⡿⠿⠿⠿⠿⠟⠛⠛⠉⠁⠀⠀⠀⣠⣿⣿⡟⠁⣠⣿⣿⣃⣿⣿⡇⠀⠀⢠⡿⣟⡟⡎⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⢇⣿⢬⣿⣀⡄⠏⣧⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣿⣿⣿⢫⣠⡾⠛⣽⣡⣿⡿⢿⣧⠀⠀⣸⡏⢹⡇⣷⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣽⡟⠘⣿⣄⠛⣿⡿⣾⣾⣿⣿⣿⣿⣶⡤⢤⣤⣤⣴⣾⡿⢋⣵⡯⠴⠚⠯⣤⠾⠟⠉⠘⣷⠈⢩⣾⢀⡟⣠⣦⡇⣿⡄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣇⠀⠘⣿⣦⣿⣇⣻⣿⡼⣿⣿⣿⢏⣿⣗⠹⣿⣿⠁⠴⣛⣁⣀⣀⡀⠀⠈⠳⣝⡦⣀⡘⣇⠈⡏⣼⣿⡿⣋⣀⣸⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣷⣦⣈⠻⣿⡿⢷⣙⣿⠤⣿⣿⡸⡼⢉⣆⠘⠁⠀⠈⠙⣿⡿⠉⢩⣿⡗⣦⡈⠿⢷⣾⣋⣴⢧⣯⣽⣿⡏⢙⣿⢻⡏⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣹⣯⣭⠿⣿⣿⡾⣿⣿⣳⣴⠖⣾⣿⣷⡳⣼⢻⠆⠀⠀⠀⠀⢽⣷⣧⡌⢛⣡⡼⣏⡴⠂⣀⠐⣛⡆⣿⣿⣍⣀⣽⡯⣾⣴⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣧⣿⡟⣅⠀⠘⣤⣽⣟⣿⡿⡟⠀⣿⣿⣿⣷⣌⠳⣧⠀⠀⢰⣿⡎⠁⠀⠈⠉⣵⣶⠟⢁⡸⠃⢈⣭⠆⠙⠟⠶⠈⢽⣽⣿⢇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣟⣿⡌⠚⣫⣷⣻⣷⣿⡗⡇⣸⠏⠸⣇⢻⣿⣷⣾⡄⠀⣼⣿⡗⠀⠀⠀⠀⠈⠉⠀⣈⣀⡀⢸⢻⡄⠀⠀⠀⠀⢸⣿⡟⠈⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿
⣿⣿⣿⣿⣋⣀⡼⢏⣹⠟⢹⡏⣷⢃⣿⣲⣤⣽⣄⢻⣿⣿⣧⠀⠀⠘⠇⠀⠀⠀⢀⠀⠀⠐⠛⢉⠁⠘⠮⢷⠀⠀⠀⠀⡿⣿⣧⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣶⣤⣵⣀⢠⣴⢿⡧⡿⣼⣿⣿⠈⠙⠿⣿⣿⣿⣿⢦⡀⠀⣴⢶⢯⡛⠉⠀⠀⠀⠀⠈⠑⠀⠚⠁⠲⡄⢀⡜⣰⡿⠟⢱⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣟⠻⠿⣧⡗⢿⡿⣧⠀⠀⠀⠘⠛⢿⡻⣎⢻⣦⡘⠃⠃⠻⣶⡤⣄⣀⣀⣐⣾⣃⣀⡤⠞⢡⣮⣾⡿⣇⢀⣾⣿⣿⣿⡿⢻⣇⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⠻⠿⠿⣦⣀⣈⠻⣿⣶⣿⣷⣦⣀⠀⣄⠀⠹⣌⠻⣝⢿⣦⣀⠀⠈⠙⠿⠿⠾⢼⣧⠾⠋⢀⣴⡿⢻⣿⣧⣽⣿⣿⡿⣿⡿⢁⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡏⠀⢼⡌⢿⣄⠀⠀⠈⢧⡀⠀⠛⠻⢿⣿⣿⣿⣿⣿⣷⡄⠸⣧⡈⢳⣙⣿⣷⣄⠀⠈⠙⠲⡶⠚⢀⣴⠟⣹⣧⣿⣿⢸⣿⣿⣿⣦⣷⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⢷⠀⢀⢳⡀⠻⣦⣀⠀⠀⠹⣄⠀⠀⣺⣾⣿⣿⡿⡛⠿⣿⣦⣸⣿⣄⡉⠉⠛⠻⠿⣦⣄⣀⣠⣾⡟⢁⠰⣿⡿⣽⠇⣿⣿⣿⡿⣿⣯⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢪⣿⢧⠀⢀⡙⠒⠙⣿⡷⣤⣀⠈⠀⠀⣿⣿⣿⢿⣷⣬⣱⣿⣿⣿⡇⠀⠉⡉⠉⠳⠾⠿⠟⠙⠻⢿⣦⡿⠚⣫⣾⠋⣼⣿⣿⠿⡄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣾⣿⣧⣵⣄⠀⠻⣿⣈⣹⣷⡶⣟⣻⣭⣙⣿⣿⣿⣿⣄⣿⣿⣿⣄⣾⣿⣦⣤⣀⠀⠀⠀⠀⠀⠙⣿⣿⠛⢁⣾⡿⠟⠁⠁⣹⣿⣿⣿⣿⣿⣿⣿⡿⣩⣿⣿⡿⣿⣿⣿⣿⣿
⣻⣿⣿⣿⣿⣿⠟⠦⠀⣰⡏⣳⣮⣿⡷⢯⡽⡕⣾⣿⣿⣽⡟⠛⢻⢿⣟⣿⡛⠻⣿⣦⣄⡀⠀⠀⠀⢀⣿⣿⣾⡿⠋⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⡿⢿⣶⣿⣿⣿⣟⣿⣿⣿⣿⣿
⠹⣿⣿⣿⣿⣦⣂⣀⣰⢇⣴⣿⣿⣿⣷⠏⣄⣾⣿⣿⢏⡈⣻⣟⣿⣿⣿⣿⣿⣶⣄⣙⣿⣿⠿⠋⣩⢹⣿⣿⠟⠁⠀⢀⣠⣾⣿⠿⢿⣿⣿⣿⣯⣾⣏⣽⣿⡿⢿⣿⣿⣿⣿⣿⣿
⢀⡿⠋⠋⠛⠋⠑⣻⣿⢿⣿⣿⣿⣿⠏⢰⣿⣿⡿⠃⢀⣷⡀⠛⠉⢻⣿⡿⣿⣿⣿⡿⣏⣸⢀⡴⠃⣿⡿⠁⣠⣶⣾⣿⣋⣽⣯⢾⠉⠺⠻⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿
⠘⠁⠀⠀⠀⠀⠀⣯⣼⣿⣿⣿⡿⣿⠀⣾⣿⣿⠁⠀⠘⢦⣳⡄⠀⣴⠟⣩⠵⠛⠉⠒⢈⡷⠋⠀⣸⣯⣾⣿⣿⣿⡿⣿⢥⣿⡷⣎⣀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡟⠁⠸⢸⣷⣾⣧⣌⣦⡀⠀⠈⠻⣬⡕⠋⠁⠀⢀⣀⣤⣾⣏⣤⣶⣿⣿⣿⣯⣿⣿⣿⣿⣭⣿⣵⣶⣤⣤⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣷⣶⡚⠟⠉⠉⠙⠛⠛⠛⠶⢦⣄⡉⠉⣍⣭⣿⣿⣽⣿⠟⠉⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧
⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠒⠢⠴⠤⢤⣴⡟⢿⠃⠀⠀⢍⣿⣿⡟⣷⢀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡿⠂⠀⠀⠀⣰⡟⠀⣿⣤⣠⠾⢿⡿⣁⠙⣒⣶⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣤⣤⣤⣶⠈⣀⣀
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢰⣿⣿⡇⠀⠀⣠⠴⢻⠁⢰⣧⠀⠀⢀⡞⠀⠀⡙⠀⡏⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣉⢹⠁⠛⠛⠁
⡴⡿⠿⢟⣿⣿⣿⡿⢿⣿⡿⠫⢠⣿⣿⣿⣇⡠⠞⠉⢆⣸⠟⢻⣾⠀⣶⣿⣶⣶⣾⣶⣶⣷⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣉⣉⣉⣉⣉⣉⣽⡿⣿⣿⣿⣿⣿⣈⣀⣀⣀⡀
⠀⠁⠀⡼⠉⠙⠛⠁⢠⣿⠀⣠⠋⠙⣿⣿⢻⠀⠀⠀⠈⠈⣿⣟⢸⡄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣍⣉⣙⢨⣻⣿⣿⣿⡇⢁⣀⣠⣼
⡀⠀⢠⠇⠀⠀⠀⠘⣿⡓⡾⣁⠴⠞⠙⣟⣎⣀⣀⣀⣀⣀⣿⣯⣷⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠿⠿⣇⠀⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⡀⠲⠚
⠈⠀⠈⠀⠀⠀⣴⣾⡿⠟⠋⠃⠀⠀⠀⡸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠿⢿⣿⣿⠿⢿⡭⣭⡷⠯⠽⣮⣄⡤⠌⠈⠩⠛⠶⠬⡽⠿⡿⠿⠉⠀⠀⠧
⠀⠀⠐⢀⠒⡀⠹⣿⣷⣃⣀⡀⠀⢀⣠⠃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠤⠄⠃⠙⠶⣝⣷⣄⠙⠛⠢⠄⠈⠉⠙⠓⠒⠶⠾⣿⡯⠀⠀⠀⠀⠀⠀⠸
⠀⠀⠐⠀⠀⠀⣾⣿⣿⣷⣿⣷⣶⣶⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣻⣟⡟⠛⣿⠛⠛⠉⠀⠈⠁⢉⡉⠉⢻⣍⡧⠀⠀⠀⠈⠉⠒⢀⠐⠚⠒⠒⠂⠀⢰⢾⣿⣯⣻⠋
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢗⡶⠓⣾⢀⡜⡒⠒⠒⠂⠀⠀⠀⠑⠀⢀⡠⠞⠙⢻⡔⠀⠀⠀⠀⠀⠀⠀⠁⠀⠤⡴⠧⠄⠉⢳⠯⠬
⣤⣤⣤⣤⣤⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⡿⠿⠿⡿⢿⡟⠉⣱⢧⡾⡷⠗⠛⠋⠀⠀⠉⠭⣡⠴⠿⣭⠉⠉⣯⠛⢧⡄⠀⠀⠀⠒⠖⠒⠀⡾⠓⠀⣐⡒⠂⠐⠒
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⡇⠀⠀⠉⠈⠉⠉⣧⠎⠀⢀⣿⠞⠀⡇⠀⠀⠀⢀⡤⠖⡻⠀⠀⠀⡟⠒⢒⡇⣀⠀⠉⣦⡀⠐⠂⠀⠀⡜⠁⠀⠄⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡧⢀⡇⠀⠠⠤⠀⢀⡴⠃⠉⠉⡽⠋⠍⢉⣩⠭⡟⠋⡏⢉⡽⠏⠉⣏⡉⠉⢁⡉⡏⠈⡇⠉⣀⠈⠧⡖⠂⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀
**/
