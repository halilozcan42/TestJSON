const app = document.getElementById("root");

const container = document.createElement('div');
container.setAttribute('class', 'container');


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dimitrij.github.io/JSONAPI/persons.json', true);

xhr.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        let data = JSON.parse(this.responseText)
        data.forEach(person => {
            let html = '';

            html = `
            <div class="container">
            <div class="person">
                <h1>${person.title}</h1>
                <p>${person.description}</p>
            </div>
            </div>
            `;


            app.innerHTML += html;


        });
    }

}

xhr.send();