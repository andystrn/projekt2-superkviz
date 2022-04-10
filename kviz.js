let kviz = document.querySelector('.kviz');
let aktualniOtazka = 0;

const poleOtazky = [
{
    otazka: 'Co je ikonická hračka z 80. let?',
    foto: 'obrazky/moncicak.jpg',
    odpovedi: ['Kočičák','Mončičák','Opičák'],
    indexSpravneOdpovedi: 1,
    zadanaOdpoved: null
},
{
    otazka: 'Jaké má Andy oblíbené jídlo?',
    foto: 'obrazky/ovoce.jpg',
    odpovedi: ['Kokos','Jahoda','Ani jedna z možností'],
    indexSpravneOdpovedi: 2,
    zadanaOdpoved: null
},
{
    otazka: 'Co pijou Češi nejčastěji?',
    foto: 'obrazky/pivo.jpg',
    odpovedi: ['Pivo','Čaj','Džus'],
    indexSpravneOdpovedi: 0,
    zadanaOdpoved: null
}
];

function zobrazOtazku(cisloOtazky) {
    let moznosti = document.querySelector('ul');
    const vsechnyLiPrvky = document.querySelectorAll('li');

    vsechnyLiPrvky.forEach((li) => {
        moznosti.removeChild(li);
        }
    )

    document.getElementById('poradi').innerText = (cisloOtazky + 1) + "/" + poleOtazky.length;
    document.getElementById('otazka').innerText = poleOtazky[cisloOtazky].otazka;
    document.getElementById('obrazek').src = poleOtazky[cisloOtazky].foto;

   vygenerujMoznosti(moznosti,poleOtazky[cisloOtazky].odpovedi);
}

function vygenerujMoznosti(rodic,odpovedi) {
    for (i = 0; i < odpovedi.length; i++) {
        let novaOtazka = document.createElement('li');

        novaOtazka.innerHTML = odpovedi[i];
        novaOtazka.dataset.odpoved = i.toString();
        novaOtazka.addEventListener('click', dalsiOtazka);

        rodic.appendChild(novaOtazka);
    }   
}

function dalsiOtazka(udalost) {
    let odpoved = udalost.target;
    poleOtazky[aktualniOtazka].zadanaOdpoved = parseInt(odpoved.dataset.odpoved);
    console.log(poleOtazky[aktualniOtazka].zadanaOdpoved == poleOtazky[aktualniOtazka].indexSpravneOdpovedi);
    if (aktualniOtazka < poleOtazky.length - 1) {
        aktualniOtazka++;
        zobrazOtazku(aktualniOtazka);
    }
    else {
        document.querySelector('.kviz').style.display='none';
        let divVysledek = document.querySelector('.vysledek');
        divVysledek.style.display='block';
        hodnoceni(divVysledek);
    }
}

function hodnoceni(rodic) {
    let textOdpoved = "Tvoje odpověď: "; 
    let textSpravnaOdpoved = "Správná odpověď: ";
    let pocetSpravnychOdpovedi = 0;

    for (i = 0; i < poleOtazky.length; i++) {
        let hodnoceniOtazka = document.createElement('h3');
        let hodnoceniTvojeOdpoved = document.createElement('p');
        let hodnoceniSpravnaOdpoved = document.createElement('p');
        let indexTvojeOdpoved = poleOtazky[i].zadanaOdpoved;
        let indexSpravneOdpovedi = poleOtazky[i].indexSpravneOdpovedi;
        
        hodnoceniTvojeOdpoved.innerHTML = textOdpoved + poleOtazky[i].odpovedi[indexTvojeOdpoved];
        if (indexTvojeOdpoved === indexSpravneOdpovedi) {
            hodnoceniSpravnaOdpoved.innerHTML = "To je správná odpověď.";
            pocetSpravnychOdpovedi++;
        }
        else {
            hodnoceniSpravnaOdpoved.innerHTML = textSpravnaOdpoved + poleOtazky[i].odpovedi[indexSpravneOdpovedi];
        }

        hodnoceniOtazka.innerHTML = (i+1) + ". " + poleOtazky[i].otazka;
        rodic.appendChild(hodnoceniOtazka);
        rodic.appendChild(hodnoceniTvojeOdpoved);
        rodic.appendChild(hodnoceniSpravnaOdpoved);

    }

    let vysledneHodnoceni = document.createElement('h2');
    vysledneHodnoceni.innerHTML = "Správně " + pocetSpravnychOdpovedi + " ze " + poleOtazky.length + " otázek. Úspěšnost " + Math.round(((pocetSpravnychOdpovedi/poleOtazky.length)*100)) + " %."
    rodic.appendChild(vysledneHodnoceni);
}
zobrazOtazku(aktualniOtazka);


