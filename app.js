const btnLogin = document.querySelector('#btniniciarSesion');
const mostrar =document.getElementById('acciones');
const ocultar = document.getElementById('btnCerrarSesion');
const ocultarDatos =document.getElementById('datosCte');
const accionCerrarSesion= document.getElementById('btnCerrarSesion');
const accconsultarsaldo = document.getElementById('btnConsultarSaldo');
const accingresar = document.getElementById('btnIngresar');
const accRetirar =  document.getElementById('btnRetirar');
const montoAccion = document.getElementById('inputMonto');
const accionLogin = document.getElementById('divInicioSesion');
const saldoColor =  document.getElementById('cteSaldo');

mostrar.style.visibility ='hidden';
ocultar.style.visibility = 'hidden';
ocultarDatos.style.visibility ='hidden';

document.getElementById("horaActual").innerHTML = Date();

var cuentas = [
    { nombre:"uno",password: "uno",saldo:10},
    { nombre:"dos",password: "dos",saldo:10 },
    { nombre:"tres",password: "tres", saldo:10 }
  ];

var sesionIniciada ='x';

function validarNumero(numero){
if(typeof(numero) === 'number'){
return true;
}
}

function validarSuma(saldoActual,montoIngresar){
if((saldoActual + montoIngresar)> 990){
 /* window.alert("Monto que supera el limite de la cuenta");*/
  const login = document.getElementById('sesionIniciada');
  login.innerHTML = "Monto que supera el limite de la cuenta";
  login.style.color ="#CF250F";

  return false;
}else if((saldoActual + montoIngresar)<= 990){
return true;
}
}

function validarResta(saldoActual,montoRestar){
  if((saldoActual - montoRestar) < 10){
    /*window.alert("Monto que deja monto minimo en cuenta");*/
    const login = document.getElementById('sesionIniciada');
    login.innerHTML = "Monto que deja monto minimo en cuenta";
    login.style.color = "#CF250F";
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
      const saldo = document.getElementById('cteSaldo');
      nombre.innerHTML =cuentas[i].nombre;
      saldo.innerHTML = cuentas[i].saldo;
      sesionIniciada = i;
        console.log(sesionIniciada);
      x=1;
      accionLogin.style.visibility ='hidden';
      mostrar.style.visibility = 'visible';
      ocultar.style.visibility = 'visible';
      ocultarDatos.style.visibility ='visible';

      const login = document.getElementById('sesionIniciada');
      login.innerHTML = "Sesion Iniciada";
      login.style.color = "#33B60B";
  } 
}
if(x==0){
  const loginFail = document.getElementById('sesionIniciada');
  loginFail.innerHTML = "Datos Incorrectos";
  loginFail.style.color = "#B61F0B";
  mostrar.style.visibility = 'hidden';
}
}
);

accionCerrarSesion.addEventListener('click',function(){
  mostrar.style.visibility = 'hidden';
  ocultar.style.visibility = 'hidden';
  ocultarDatos.style.visibility ='hidden';
  accionLogin.style.visibility ='visible';
  const nombre = document.getElementById('cteNombre');
  const saldo = document.getElementById('cteSaldo');
      nombre.innerHTML ='Cliente:';     
      saldo.innerHTML = 'Saldo: '
      sesionIniciada='x';
      const login = document.getElementById('sesionIniciada');
      login.innerHTML = "Sesion Cerrada";
      login.style.color = "#FF5E00";
});


accingresar.addEventListener('click',function(){
  const montoIngresar = document.getElementById('inputMonto').valueAsNumber;
if(validarSuma(cuentas[sesionIniciada].saldo, parseInt(montoIngresar))== true){
  cuentas[sesionIniciada].saldo = parseInt(cuentas[sesionIniciada].saldo + parseInt(montoIngresar));
  const saldo = document.getElementById('cteSaldo');
  saldo.innerHTML = cuentas[sesionIniciada].saldo;
  saldoColor.style.color = "#0D02AC";
  const login = document.getElementById('sesionIniciada');
  login.innerHTML = "Operacion realizada con exito";
  login.style.color ="#0F42CF";
}
});

accRetirar.addEventListener('click',function(){
  const montoIngresar = document.getElementById('inputMonto').valueAsNumber;
if(validarResta(cuentas[sesionIniciada].saldo, parseInt(montoIngresar))== true){
  cuentas[sesionIniciada].saldo = parseInt(cuentas[sesionIniciada].saldo - parseInt(montoIngresar));
  const saldo = document.getElementById('cteSaldo');
  saldo.innerHTML = cuentas[sesionIniciada].saldo;
  saldoColor.style.color = "#CC1717";
  const login = document.getElementById('sesionIniciada');
  login.innerHTML = "Operacion realizada con exito";
  login.style.color ="#0F42CF";
}
});

