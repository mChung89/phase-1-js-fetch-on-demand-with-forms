const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = e.target.children[1].value
        fetch(`http://localhost:3000/movies/${input}`).then(resp => resp.json()).then(json => {
            const title = document.querySelector('#movieDetails h4')
            title.textContent = json.title
            const summary = document.querySelector(`#movieDetails p`)
            summary.textContent = json.summary
        })
        inputForm.reset()
    })
}

document.addEventListener('DOMContentLoaded', init);