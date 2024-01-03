export function darkmode() {
    const btndark = document.querySelector('input#darkmod');

    btndark.addEventListener('change', (event) => {
        if (btndark.checked) {
            document.body.classList.add('darkmode')
            console.log('maoro')
        } else {
            document.body.classList.remove('darkmode')
            console.log('dzue')
        }
    })
}

// a faire pour le dark mode : adaptation en fonction de la préférence de couleur
// et aussi faire en sorte que ça garde notre ancienne valeur : dark ou light