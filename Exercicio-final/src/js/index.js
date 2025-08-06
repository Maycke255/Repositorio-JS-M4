import { v4 as uuidv4 } from 'uuid';
import '../css/index.css'

const textInput = document.getElementById('textCode');
const copyBtn = document.getElementById('copyCode');
const message = document.getElementById('message');

document.getElementById('getCode').addEventListener('click', () => {
    if (copyBtn.innerText === 'Copied!') {
        copyBtn.innerText = 'Copy';
        copyBtn.classList.remove('copied');
    }

    message.innerText = 'Parabens, seu código de usuario foi gerado!';

    setTimeout( () => {
        message.innerText = '';
    }, 2500);

    const code = uuidv4();
    console.log(code);
    textInput.value = code;
})

copyBtn.addEventListener('click', () => {
    if (copyBtn.innerText === 'Copy') {
        copyBtn.classList.add('copied');
        copyBtn.innerText = 'Copied!';
        navigator.clipboard.writeText(textInput.value);
    } else {
        copyBtn.classList.remove('copied');
        copyBtn.innerText = 'Copy';
    }
})