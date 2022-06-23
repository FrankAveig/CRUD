const formulario = document.getElementById('formulario')

function show(){
    if(formulario.classList.contains('hide')){
        formulario.classList.remove('hide')
    }
}

function hide(){
    if(formulario.classList.contains('.hide')){
    }else{
        formulario.classList.add('hide')
    }
}