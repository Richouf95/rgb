let body = document.body;
let bonneCouleur = document.getElementById('bonneCouleur');
let btnNewColor = document.getElementById('newColor');
let btnEasy = document.getElementById('btnEasy');
let btnHard = document.getElementById('btnHard');
let message = document.getElementById('message');
let niveau = document.querySelectorAll('.niveau');
let carre = document.querySelectorAll('.carre');
let division2 = document.getElementById('division2');
let congrat = document.getElementById('congrat');
let couleurCarre = '';
let laBonne = '';
let faux = 'faux';

congrat.style.visibility = 'hidden';

niveau[0].addEventListener('click', niveau0) 
    function niveau0() {
        niveau[0].style.background = "rgb(77, 77, 169)";
        niveau[1].style.background = "white";
        division2.remove();
        faux = 'vrai';
    }
niveau[1].addEventListener('click', niveau1) 
    function niveau1() {
        niveau[1].style.background = "rgb(77, 77, 169)";
        niveau[0].style.background = "white";
        division2.remove();
        location.reload();
    }

btnNewColor.addEventListener('click', reloadColor);
    function reloadColor() {
        couleur();
        btnNewColor.textContent = 'NEW COLORS';
        btnNewColor.style.background = 'none';
        message.textContent = '';
        congrat.style.visibility = 'hidden';
    }

    let t = '';
function couleur() {
    let tableau = [];
    if (faux === 'vrai') {
        for (let a = 0; a < 3; a) {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            couleurCarre = "rgb(" + r + "," + g + "," + b + ")";
            carre[a].style.background = couleurCarre;
            tableau.push(couleurCarre);
            a++;
        }
        let b = Math.floor(Math.random() * 3);
        laBonne = tableau[b];
        bonneCouleur.textContent = laBonne;
    } else {
        for (let a = 0; a < 6; a) {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            couleurCarre = "rgb(" + r + "," + g + "," + b + ")";
            carre[a].style.background = couleurCarre;
            tableau.push(couleurCarre);
            a++;
        }
        let b = Math.floor(Math.random() * 6);
        laBonne = tableau[b];
        bonneCouleur.textContent = laBonne;
    }
    t = tableau;
}
couleur();
function yes() {
    haut.style.background = laBonne;
    btnNewColor.textContent = 'PLAY AGAIN';
    btnNewColor.style.background = laBonne;
    congrat.style.visibility = 'visible';
    congrat.style.color = laBonne;
    message.textContent = 'YES YOU GOT IT';
    carre[0].style.background = laBonne;
    carre[1].style.background = laBonne;
    carre[2].style.background = laBonne;
    carre[3].style.background = laBonne;
    carre[4].style.background = laBonne;
    carre[5].style.background = laBonne;
    return;
}

carre[0].addEventListener('click', choix0);
    function choix0() {
        if (t[0] == laBonne) {
            yes();
        } else {
            carre[0].style.background = 'rgb(40,40,40)';
            message.textContent = 'TRY AGAIN'
        }
    }
carre[1].addEventListener('click', choix1);
    function choix1() {
        if (t[1] == laBonne) {
            yes();
        } else {
            carre[1].style.background = 'rgb(40,40,40)';
            message.textContent = 'TRY AGAIN'
        }
    }
carre[2].addEventListener('click', choix2);
    function choix2() {
        if (t[2] == laBonne) {
            yes();
        } else {
            carre[2].style.background = 'rgb(40,40,40)';
            message.textContent = 'TRY AGAIN'
        }
    }
carre[3].addEventListener('click', choix3);
    function choix3() {
        if (t[3] == laBonne) {
            yes();
        } else {
            carre[3].style.background = 'rgb(40,40,40)';
            message.textContent = 'TRY AGAIN'
        }
    }
carre[4].addEventListener('click', choix4);
    function choix4() {
        if (t[4] == laBonne) {
            yes();
        } else {
            carre[4].style.background = 'rgb(40,40,40)';
            message.textContent = 'TRY AGAIN'
        }
    }
carre[5].addEventListener('click', choix5);
    function choix5() {
        if (t[5] == laBonne) {
            yes();
        } else {
            carre[5].style.background = 'rgb(40,40,40)';
            message.textContent = 'TRY AGAIN'
        }
    }