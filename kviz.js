let kviz = document.querySelector('.kviz');

const poleOtazky = [
{
    otazka: 'Co je ikonická hračka z 80. let?',
    foto: 'obrazky/moncicak.jpg',
    odpovědi: ['Kočičák','Mončičák','Opičák'],
    indexSpravneOdpovedi: 1
},
{
    otazka: 'Jaké má Andy oblíbené jídlo?',
    foto: 'obrazky/ovoce.jpg',
    odpovědi: ['Kokos','Jahoda','Ani jedna z možností'],
    indexSpravneOdpovedi: 2
},
{
    otazka: 'Co pijou Češi nejčastěji?',
    foto: 'obrazky/pivo.jpg',
    odpovědi: ['Pivo','Čaj','Džus'],
    indexSpravneOdpovedi: 1
}
];

function zobrazOtazku(cisloOtazky) {
    let otazka = document.querySelector('ul');
    const vsechnyLiPrvky = document.querySelectorAll('li');

    vsechnyLiPrvky.forEach((li) => {
        otazka.removeChild(li);
    }
    )

    document.getElementById('poradi').innerText = (cisloOtazky+1) + "/" + poleOtazky.length;
    document.getElementById('otazka').innerText = poleOtazky[cisloOtazky].otazka;
    document.getElementById('obrazek').src = poleOtazky[cisloOtazky].foto;

   
    let novaOtazka1 = document.createElement('li');
    let novaOtazka2 = document.createElement('li');
    let novaOtazka3 = document.createElement('li');

    novaOtazka1.innerHTML = poleOtazky[cisloOtazky].odpovědi[0];
    novaOtazka2.innerHTML = poleOtazky[cisloOtazky].odpovědi[1];
    novaOtazka3.innerHTML = poleOtazky[cisloOtazky].odpovědi[2];

    novaOtazka1.dataset.odpoved = "0";
    novaOtazka2.dataset.odpoved = "1";
    novaOtazka3.dataset.odpoved = "2";

    otazka.appendChild(novaOtazka1);
    otazka.appendChild(novaOtazka2);
    otazka.appendChild(novaOtazka3);
}

zobrazOtazku(0);
zobrazOtazku(1);