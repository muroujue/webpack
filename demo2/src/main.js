import './assets/css/style.css';

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = '<h1>hello world!!!~~~</h1>'
    element.classList.add('red');

    return element;
}

document.body.appendChild(component());