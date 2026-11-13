function touching() {
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);
    pacotes += 1;
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

function farmar() {
    let pacotes = parseInt(document.getElementById("pontos").innerHTML);
    let pacotesPorSegundo = calcularPacotesPorSegundo();

    pacotes += pacotesPorSegundo;
    document.getElementById("pontos").innerHTML = pacotes;
    document.getElementById("pacotesPorSegundo").innerHTML = pacotesPorSegundo;
}

function PlacaDeRede() {
    let nivel_placa = parseInt(document.getElementById("nível_placa").innerHTML);
    let lucro = 1;
    return nivel_placa * lucro;
}

function Switch() {
    let nivel_switch = parseInt(document.getElementById("nível_switch").innerHTML);
    let lucro = 4;
    return nivel_switch * lucro;
}

function Router() {
    let nivel_router = parseInt(document.getElementById("nível_router").innerHTML);
    let lucro = 15;
    return nivel_router * lucro;
}

function DnsServer() {
    let nivel_dns = parseInt(document.getElementById("nível_dns").innerHTML);
    let lucro = 60;
    return nivel_dns * lucro;
}

function CaboDeFibraOtica() {
    let nivel_fibra = parseInt(document.getElementById("nível_fibra").innerHTML);
    let lucro = 250;
    return nivel_fibra * lucro;
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
6767676767676767676767676767676767676767676767676767676767676767
**/
