//useEffect se utiliza para ejecutar código que tiene efectos que no son solo mostrar por pantalla.

//Se importa React y useState y useEffect
import React, { useState, useEffect } from "react";

//Se crea el componente llamado FechaHora
function FechaHora(){

    //new Date() crea un objeto con la fecha y hora actuales (fechaInicial).
    //Intl.DateTimeFormat permite dar formato a la fecha/hora según el idioma del sistema y mostrar solo lo que queremos.
    //Utilizamos "const" para valores que no van a cambiar (es decir, constantes)

    const fechaInicial = new Intl.DateTimeFormat(undefined, {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date());

    //useState permite guardar el estado del componente. Se inicializa el estado con la fecha y hora actuales del sistema.
    //El estado permite a React guardar datos que pueden cambiar con el tiempo, y le indicamos que empieza con el valor guardado en fechaInicial.
    //Usamos "const" porque aunque cambie cada minuto, el valor que se asigna al principio no lo hace.
    //"setFechaHora" es la herramienta que hay para cambiar el contenido de la variable. Cada vez que se usa, se actualiza el valor de la variable.
    //useState es el estado de React que guarda el valor que puede cambiar con el tiempo. 
    //Creamos fechaHora como un estado, lo inicializamos con fechaInicial, y usamos setFechaHora para actualizar ese estado cada minuto. fechaInicial ya no se toca, solo sirvió para iniciar el estado.

    const [FechaHora, setFechaHora] = useState(fechaInicial)

    //useEffect se ejecuta después de que el componente aparezca en pantalla y se usa para crear un intérvalo que actualice la hora cada minuto.
    //setInterval ejecuta una funcion repetidamente cada X milisegundos. En este caso se actualiza el estado fechaHora cada 60000 ms = 1 min. 
    //setFechaHora cambia el estado del componente y React lo vuelve a dibujar con la nueva hora. 
    //Usamos const en intervalo para indicar que intervalo no va a ser reasignado a otra cosa.
    //Se utilizan funciones anónimas dentro de cada elemento para evitar que choquen entre sí. Es útil y práctico.
    //Primero se ejecuta setFechaHora una vez cuando se monta, luego cada 60 segundos.

    useEffect(function() {
        setFechaHora(new Intl.DateTimeFormat(undefined, {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date()));

        const intervalo = setInterval (function() {
            setFechaHora(new Intl.DateTimeFormat(undefined, {
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
            }).format(new Date()));
        }, 60000);

        //Se hace una limpieza para que setInterval no siga funcionando mientras no se necesita.
        //Por ejemplo, si cambiamos de página y el componente se desmonta, el intérvalo seguiría ejecutándose si no lo detenemos, causando fugas de memoria y errores, porque React intenta actualizar un componente que ya no existe.
        //clearInterval forma parte de JavaScript, igual que setInterval, por eso detecta automáticamente cuando nos vamos de la página y cuando limpiar la variable de arriba.

        return function(){
            clearInterval(intervalo);
        };
    }, []); //La lista vacía indica que este useEffect se ejecuta solo una vez al montar el componente.

    //Finalmente, se devuelve el JSX que se renderiza en pantalla, mostrando la fecha y hora dentro de un div.
    return <div>{FechaHora}</div>;
}

//Se exporta el componente para poder usarlo en otros archivos. 
export default FechaHora;