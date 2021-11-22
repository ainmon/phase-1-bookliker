document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/books')
    .then(r => r.json())
    .then(obj => obj.map(d => renderBooks(d)))

});

function renderBooks(book){
    let list = document.getElementById('list')
    let li = document.createElement('li')

    let title = book.title
    li.append(title)
    list.append(li)

    li.addEventListener('click', (e) => {
        let panel = document.getElementById('show-panel')
        let p = document.createElement('p')
        let image = document.createElement('img')

        panel.innerHTML = ''

        image.src = e.target.img_url
        p.textContent = e.target.description

        panel.append(p, image)


    })

}

