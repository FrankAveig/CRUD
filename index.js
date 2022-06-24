const formulario = document.getElementById('formulario');
const nombre = document.getElementById('inputNombre');
const fechaNacimiento = document.getElementById('inputFechaNacimiento');
const vacuna = document.getElementById('inputVacuna');
const fechaVacunacion = document.getElementById('inputFechaVacunacion');
const fechaRevacunacion = document.getElementById('inputFechaRevacunacion');
const bodyTable = document.getElementById('bodyTable')
const mascotas = [
    {
        nombre:'asdf',
        fechaNacimiento:'asdf',
        vacuna:'1',
        fechaNacimiento:'2',
        fechaVacunacion:'3',
        fechaRevacunacion:'3'
    }
]

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

function addMascota (nombre, fechaNacimiento,vacuna,fechaVacunacion,fechaRevacunacion){
    mascotas.push({
        nombre,
        fechaNacimiento,
        vacuna,
        fechaNacimiento,
        fechaVacunacion,
        fechaRevacunacion
    })
    mostrarMascotas();
}

function editMascota(indice){
    mascotas[indice].nombre
}
function limpiar(){
    nombre.value='';
    fechaNacimiento.value=''; 
    vacuna.value='';
    fechaVacunacion.value='';
    fechaRevacunacion.value='';
}

function nuevoIngreso(){
    if(nombre.value.trim() !== ''&& fechaNacimiento.value.trim()!=='' && vacuna.value.trim() !== '' && fechaVacunacion!== '' && fechaRevacunacion !==''){
        addMascota(nombre.value,fechaNacimiento.value,vacuna.value,fechaVacunacion.value,fechaRevacunacion.value)
        limpiar();
        hide();
    }else{
        alert("Debe llenar todos los campos");
    }

}



function mostrarMascotas(){
    bodyTable.innerHTML= '';
    mascotas.forEach(function(mascota,indice) {
        bodyTable.innerHTML += `
                <td>${indice +1}</td>
                <td>${mascota.nombre}</td>
                <td>${mascota.fechaNacimiento}</td>
                <td>${mascota.vacuna}</td>
                <td>${mascota.fechaVacunacion}</td>
                <td>${mascota.fechaRevacunacion}</td>
                <td><i  data-bs-toggle="modal" data-bs-target="#editModal" class="fas fa-edit"></i>
                <td><i class="fas fa-backspace"></i>
        
        `
    })
}

mostrarMascotas();