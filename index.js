const formulario = document.getElementById('formulario');
const nombre = document.getElementById('inputNombre');
const fechaNacimiento = document.getElementById('inputFechaNacimiento');
const vacuna = document.getElementById('inputVacuna');
const fechaVacunacion = document.getElementById('inputFechaVacunacion');
const fechaRevacunacion = document.getElementById('inputFechaRevacunacion');
const editNombre = document.getElementById('editNombre');
const editFechaNacimiento = document.getElementById('editFechaNacimiento');
const editVacuna = document.getElementById('editVacuna');
const editFechaVacunacion = document.getElementById('editFechaVacunacion');
const editFechaRevacunacion = document.getElementById('editFechaRevacunacion');
const bodyTable = document.getElementById('bodyTable');
const formBuscar = document.getElementById('formBuscar');
const buscar = document.getElementById('inputBuscar');
let indice = 0;
let mascotas = [
    {
        nombre:'Milo',
        fechaNacimiento:'2021-06-08',
        vacuna:'Triple Felina',
        fechaVacunacion:'2021-07-08',
        fechaRevacunacion:'2021-08-08'
    },
    {
        nombre:'Oreo',
        fechaNacimiento:'2022-05-08',
        vacuna:'Rabia',
        fechaVacunacion:'2022-06-08',
        fechaRevacunacion:'2022-07-08'
    }
]
let busqueda= [];

function show(id){


    if(id==='formBuscar'){
        formBuscar.classList.remove('hide')
        formulario.classList.add('hide')
    }
    if(id==='formulario'){
        formBuscar.classList.add('hide')
        formulario.classList.remove('hide')
    }

     
   
}

function hide(id){
        id.classList.add('hide')
}

function addMascota (nombre, fechaNacimiento,vacuna,fechaVacunacion,fechaRevacunacion){
    mascotas.push({
        nombre,
        fechaNacimiento,
        vacuna,
        fechaNacimiento,
        fechaVacunacion,
        fechaRevacunacion,
    })
    hide(formulario);
    mostrarMascotas();
    
}

function editarMascota(){
    mascotas[indice].nombre= editNombre.value;
    mascotas[indice].fechaNacimiento = editFechaNacimiento.value;
    mascotas[indice].vacuna = editVacuna.value;
    mascotas[indice].fechaVacunacion = editFechaVacunacion.value;
    mascotas[indice].fechaRevacunacion= editFechaRevacunacion.value;
    mostrarMascotas();
}

function eliminarMascota(indice){
    mascotas.splice(indice,1);
    mostrarMascotas();
}

function filtrarMascota(query){
    busqueda = mascotas.filter(mascota=> mascota.nombre.toLocaleLowerCase().includes(query) || mascota.vacuna.toLocaleLowerCase().includes(query) || mascota.fechaVacunacion.includes(query) || mascota.fechaRevacunacion.includes(query))
    if(query=== ''){
        mostrarMascotas()
    }else{
        mostrarFiltrados()
    }
}

buscar.addEventListener('keyup',(e)=>{
    filtrarMascota(buscar.value.toLocaleLowerCase())
    console.log(buscar.value)
},false)


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


function llenadoForm(newIndice){
    indice= newIndice;
    editNombre.value = mascotas[indice].nombre;
    editFechaNacimiento.value= mascotas[indice].fechaNacimiento;
    editVacuna.value = mascotas[indice].vacuna; 
    editFechaVacunacion.value = mascotas[indice].fechaVacunacion; 
    editFechaRevacunacion.value = mascotas[indice].fechaRevacunacion;
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
                <td><i  data-bs-toggle="modal" data-bs-target="#editModal" class="fas fa-edit " onclick ="llenadoForm(${indice})"></i>
                <td><i class="fa-solid fa-trash-can" onclick='eliminarMascota(${indice})' ></i>
                
                `

    })
    guardarMascotasStorage()
}

function mostrarFiltrados(){
    bodyTable.innerHTML= '';
    busqueda.forEach(function(busqueda,indice) {
        bodyTable.innerHTML += `
                <td>${indice +1}</td>
                <td>${busqueda.nombre}</td>
                <td>${busqueda.fechaNacimiento}</td>
                <td>${busqueda.vacuna}</td>
                <td>${busqueda.fechaVacunacion}</td>
                <td>${busqueda.fechaRevacunacion}</td>
                <td><i  data-bs-toggle="modal" data-bs-target="#editModal" class="fas fa-edit " onclick ="llenadoForm(${indice})"></i>
                <td><i class="fa-solid fa-trash-can" onclick='eliminarMascota(${indice})' ></i>
                
                `

    })
}

function guardarMascotasStorage(){
    const mascotasGuardar = JSON.stringify(mascotas)
    localStorage.setItem('mascotas',mascotasGuardar);
}

function obtenerContactosStorage(){
    const mascotasStorage =localStorage.getItem('mascotas');
    mascotas = mascotasStorage == null ? mascotas : JSON.parse(mascotasStorage)
}
obtenerContactosStorage();
mostrarMascotas();