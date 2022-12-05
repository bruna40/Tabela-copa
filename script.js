const tbJogos = document.querySelector('.tabelaJogos');
const butFase1 = document.querySelector('.butFase');
const button = document.querySelector('.but');
const oitavas = document.querySelector('.oitoJogos');
const buttonQuarta = document.querySelector('.butquarta');
const quartas = document.querySelector('.quartasJogos');
const buttonSemi = document.querySelector('.butsemi');
const semi = document.querySelector('.semiJogos');
const buttonFinal = document.querySelector('.butfinal');
const final = document.querySelector('.finalJogos');
const escopo = document.querySelector('.escopo');
const escopo1 = document.querySelector('.escopo1');
const escopo2 = document.querySelector('.escopo2');
const escopo3 = document.querySelector('.escopo3');
const escopo4 = document.querySelector('.escopo4');
const time = document.querySelector('.times');
const escopoTime = document.querySelector('.timesCard');

const escopoJogos = (xablau) => {
    let html = '';
    html += `
        <tr> 
            <th>Grupo</th>
            <th>Jogo</th>
        </tr>
    `;
    xablau.innerHTML = html;
}
const jogos = (data) => {
    let html = '';
    
    data.map(jogo => {
        html += `
            <tr>
                <td>${jogo.grupo}</td>
                <td >
                    <img class="imagemP" src="assets/bandeiras/${jogo.mandante}" alt="${jogo.mandante}">
                    <span>${jogo.gols_mandante}</span>
                    ${jogo.partida}
                    <span>${jogo.gols_visitante}</span>
                    <img class="imagemP" src="assets/bandeiras/${jogo.visitante}" alt="${jogo.visitante}">
                </td>
            </tr>
        `;
    });
    tbJogos.innerHTML = html;
    
}
butFase1.addEventListener('click', () => {
    escopoJogos(escopo);

    fetch('jogos-fase1.json')
        .then(response => response.json())
        .then(data => jogos(data));
});

const oito = (data) => {
    let html = '';

    data.map(jogo => {
        html += `
        <tr>
            <td>${jogo.grupo}</td>
            <td >
                <img class="imagemP" src="assets/bandeiras/${jogo.mandante}" alt="${jogo.mandante}">
                <span>${jogo.gols_mandante}</span>
                ${jogo.partida}
                <span>${jogo.gols_visitante}</span>
                <img class="imagemP" src="assets/bandeiras/${jogo.visitante}" alt="${jogo.visitante}">
            </td>
        </tr>
        `;
    });
    oitavas.innerHTML = html;
}
            

button.addEventListener('click', () => {
    escopoJogos(escopo1);
    fetch('oitavas.json')
        .then(response => response.json())
        .then(data => oito(data));
});


const quartasJogos = (data) => {
    let html = '';

    data.map(jogo => {
        html += `
        <tr>
            <td>${jogo.grupo}</td>
            <td >
                <img class="imagemP" src="assets/bandeiras/${jogo.mandante}" alt="${jogo.mandante}">
                <span>${jogo.gols_mandante}</span>
                ${jogo.partida}
                <span>${jogo.gols_visitante}</span>
                <img class="imagemP" src="assets/bandeiras/${jogo.visitante}" alt="${jogo.visitante}">
            </td>
        </tr>
        `;
    });
    quartas.innerHTML = html;
}

buttonQuarta.addEventListener('click', () => {
    escopoJogos(escopo2);
    fetch('quartas.json')
        .then(response => response.json())
        .then(data => quartasJogos(data));
});


const semiJogos = (data) => {
    let html = '';

    data.map(jogo => {
        html += `
        <tr>
            <td>${jogo.grupo}</td>
            <td >
                <img class="imagemP" src="assets/bandeiras/${jogo.mandante}" alt="${jogo.mandante}">
                <span>${jogo.gols_mandante}</span>
                ${jogo.partida}
                <span>${jogo.gols_visitante}</span>
                <img class="imagemP" src="assets/bandeiras/${jogo.visitante}" alt="${jogo.visitante}">
            </td>
        </tr>
        `;
    });
    semi.innerHTML = html;
}

buttonSemi.addEventListener('click', () => {
    escopoJogos(escopo3);
    fetch('semi.json')
        .then(response => response.json())
        .then(data => semiJogos(data));
});


const finalJogos = (data) => {
    let html = '';

    data.map(jogo => {
        html += `
        <tr>
            <td>${jogo.grupo}</td>
            <td >
                <img class="imagemP" src="assets/bandeiras/${jogo.mandante}" alt="${jogo.mandante}">
                <span>${jogo.gols_mandante}</span>
                ${jogo.partida}
                <span>${jogo.gols_visitante}</span>
                <img class="imagemP" src="assets/bandeiras/${jogo.visitante}" alt="${jogo.visitante}">
            </td>
        </tr>
        `;
    });
    final.innerHTML = html;
}

buttonFinal.addEventListener('click', () => {
    escopoJogos(escopo4);
    fetch('final.json')
        .then(response => response.json())
        .then(data => finalJogos(data));
});


const times = (data) => {
    let html = '';

    data.map(times => {
        html += `
            <div class="t">
                <img class="imagem" src="assets/bandeiras/${times.img}" alt="${times.time}">
                <div>
                    <p>time: ${times.time}</p>
                    <p>gols: ${times.gols}</p>
                    <p>vitorias: ${times.vitorias}</p>
                    <p>empates: ${times.empates}</p>
                    <p>derrotas: ${times.derrotas}</p>
                </div>
            </div>
        `;
    });
    escopoTime.innerHTML = html;

};

time.addEventListener('click', () => {
    fetch('times.json')
        .then(response => response.json())
        .then(data => times(data));
});

