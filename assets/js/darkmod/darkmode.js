const btndark = document.querySelector('button#darkmode');

btndark.addEventListener('click', (event) => {
    document.body.classList.toggle('darkmode')
})