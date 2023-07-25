const btnLogin = document.querySelector('#btniniciarSesion');
const mostrar =document.getElementById('acciones');
const ocultar = document.getElementById('btnCerrarSesion');
const ocultarinicio = document.getElementById('btniniciarSesion');
const accionCerrarSesion= document.getElementById('btnCerrarSesion');
const accconsultarsaldo = document.getElementById('btnConsultarSaldo');
const accingresar = document.getElementById('btnIngresar');
const accRetirar =  document.getElementById('btnRetirar');
mostrar.style.visibility ='hidden';
ocultar.style.visibility = 'hidden';

var cuentas = [
    { nombre:"uno",password: "unouno",saldo:10},
    { nombre:"dos",password: "dosdos",saldo:10 },
    { nombre:"tres",password: "trestres", saldo:10 }
  ];

var sesionIniciada ='x';

function validarNumero(numero){
if(typeof(numero) === 'number'){
return true;
}
}

function validarSuma(saldoActual,montoIngresar){
if((saldoActual + montoIngresar)> 990){
  window.alert("Monto que supera el limite de la cuenta");
  return false;
}else if((saldoActual + montoIngresar)<= 990){
return true;
}
}

function validarResta(saldoActual,montoRestar){
  if((saldoActual - montoRestar) < 10){
    window.alert("Monto que deja monto minimo en cuenta");
    return false;
  }else if((saldoActual - montoRestar) >= 10){
  return true;
  }
}

btnLogin.addEventListener('click',function(){
  var x=0;
for(let i=0; i < cuentas.length; i++){
  if(entradacte.value == cuentas[i].nombre && entradapassword.value == cuentas[i].password){
      const nombre = document.getElementById('cteNombre');
      nombre.innerHTML ='Cliente: '+ cuentas[i].nombre;
      window.alert("Sesion Iniciada!");
      sesionIniciada = i;
      console.log(sesionIniciada);
      x=1;
      mostrar.style.visibility = 'visible';
      ocultar.style.visibility = 'visible';
      ocultarinicio.style.visibility ='hidden';
  } 
}
if(x==0){
  window.alert("Datos Incorrectos!");
  mostrar.style.visibility = 'hidden';
}
}
);

accionCerrarSesion.addEventListener('click',function(){
  mostrar.style.visibility = 'hidden';
  ocultar.style.visibility = 'hidden';
  ocultarinicio.style.visibility ='visible';
  const nombre = document.getElementById('cteNombre');
      nombre.innerHTML ='Cliente:';     window.alert("Sesion Cerrada!");
      sesionIniciada='x';
})

accconsultarsaldo.addEventListener('click',function(){
window.alert("El saldo actual es de: " + cuentas[sesionIniciada].saldo);
});

accingresar.addEventListener('click',function(){
  let montoIngresar = prompt('Ingrese monto:');
if(validarSuma(cuentas[sesionIniciada].saldo, parseInt(montoIngresar))== true){
  cuentas[sesionIniciada].saldo = parseInt(cuentas[sesionIniciada].saldo + parseInt(montoIngresar));
  window.alert("El saldo actual es de: " + cuentas[sesionIniciada].saldo);
}
});

accRetirar.addEventListener('click',function(){
  let montoRetirar = prompt('Ingrese monto:');
if(validarResta(cuentas[sesionIniciada].saldo, parseInt(montoRetirar))== true){
  cuentas[sesionIniciada].saldo = parseInt(cuentas[sesionIniciada].saldo - parseInt(montoRetirar));
  window.alert("El saldo actual es de: " + cuentas[sesionIniciada].saldo);
}
});
