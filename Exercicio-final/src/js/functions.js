import { v4 as uuidv4 } from 'uuid';
import { textInput, copyBtn, message, getCodeBtn  } from './elements';

function handleGetCode () {
    if (copyBtn.innerText === 'Copied!') {
        copyBtn.innerText = 'Copy';
        copyBtn.classList.remove('copied');
    }

    message.innerText = 'Parabens, seu código de usuario foi gerado!';

    setTimeout( () => {
        message.innerText = '';
    }, 2800);

    const code = uuidv4();
    console.log(code);
    textInput.value = code;
};

function hancleCopyCode () {
    console.log(copyBtn.innerText)

    if (copyBtn.innerText === 'Copy') {
        copyBtn.classList.add('copied');
        copyBtn.innerText = 'Copied!';
        navigator.clipboard.writeText(textInput.value);
    } else {
        copyBtn.classList.remove('copied');
        copyBtn.innerText = 'Copy';
    }
}

function initEvents () {
    getCodeBtn.addEventListener('click', handleGetCode);
    copyBtn.addEventListener('click', hancleCopyCode);
}

export default initEvents;