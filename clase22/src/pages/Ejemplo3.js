import '../styles/estilos.css'

const Ejemplo3 = props =>{
    return(
        <div>
            <h1>ejemplo si uso google maps</h1>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13568.509312164037!2d-60.543771814402476!3d-31.767012958769847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44da7901b4dbf%3A0x569cf5e60f955d2e!2sNasario%20Medrano%20951%2C%20Paran%C3%A1%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1667830865534!5m2!1ses-419!2sar" style={{ width: 1000, height: 450,border:0}} ></iframe>
            </div>
        </div>
    )
}
// width="600" height="450" style="border:0;"

export default  Ejemplo3