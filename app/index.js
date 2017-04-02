import _ from 'lodash'
import './index.css'

function createElement() {
    var element = document.createElement('div')
    element.className = "generatedText"
    element.innerHTML = _.join(['hellooooo', 'webpack!'], ' ')
    return element;
}

document.body.appendChild(createElement())  