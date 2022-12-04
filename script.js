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
    fetch('final.json')
        .then(response => response.json())
        .then(data => finalJogos(data));
});