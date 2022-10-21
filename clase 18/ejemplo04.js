function getNombrediasForMes(mes) {

    if (Number.isNaN(mes))//si o si tiene que ser numerico
        return false;

    if (mes <1 || mes >12) return false; // mes tiene que estar comprendido entre 1 y 12   
    mes --;//10>9 asi octubre seria el elemento 9 porque arranca desde 0

    const data =[
        {
            nombre: 'Enero',
            dias: 31
        },
        {
            nombre: 'Febrero',
            dias: 28
        },
        {
            nombre: 'Marzo',
            dias: 31
        },
        {
            nombre: 'Abril',
            dias: 31
        },
        {
            nombre: 'Mayo',
            dias: 31
        },
        {
            nombre: 'Junio',
            dias: 30
        },
        {
            nombre: 'Julio',
            dias: 31
        },
        {
            nombre: 'Agosto',
            dias: 31
        },
        {
            nombre: 'Septiembre',
            dias: 30
        },
        {
            nombre: 'Octubre',
            dias: 31
        },
        {
            nombre: 'Noviembre',
            dias: 30
        },
        {
            nombre: 'Diciembre',
            dias: 31
        },
 
   ]
   return data[mes];  
}

const numMes = parseInt(prompt('Ingrese el mes del año',''))
const resultado = getNombrediasForMes(numMes);

if (resultado){
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias}`)
    // alert (`El mes  + resultado.nombre + tiene + resultado.dias+`)
    
} else{
    alert('Mes inválido');
}