const helloWorld = document.getElementById('hello')

const paragraph = document.createElement('p')

paragraph.innerText = 'Hello World'

helloWorld.appendChild(paragraph)

paragraph.style.color = 'red'
paragraph.style.fontSize = '18px'