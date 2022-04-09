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

for (let i = 0; i < 1; i++) { 
    document.getElementById('poradi').innerText = (i+1) + "/" + poleOtazky.length;
    document.getElementById('otazka').innerText = poleOtazky[0].otazka;
    document.getElementById('obrazek').src = poleOtazky[0].foto;

    
    let otazka = document.querySelector('ul');
    let novaOtazka1 = document.createElement('li');
    let novaOtazka2 = document.createElement('li');
    let novaOtazka3 = document.createElement('li');
    novaOtazka1.innerHTML = poleOtazky[0].odpovědi[0];
    novaOtazka2.innerHTML = poleOtazky[0].odpovědi[1];
    novaOtazka3.innerHTML = poleOtazky[0].odpovědi[2];
    otazka.appendChild(novaOtazka1);
    otazka.appendChild(novaOtazka2);
    otazka.appendChild(novaOtazka3);
}
