const persona = {
nombre: "Alexis Aguilar Agustin",
edad: 21,
fecha_de_nacimiento: "27/07/02",
lugar_nacimiento: "Ciudad de Juarez, Oaxaca",
signo_sodiacal: "Leo",
profesion: "estudiante",
pasatiempos: [
   "videojuegos",
  "ir al gimnacio",
  "entrenar aim",
  "ver series",
  "leer mangas",

]
} 
function App() {

  return (
    <div>
      <h1>inserta_datos</h1>
    <hr />  
      <ul>
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Fecha de nacimiento: {persona.fecha_de_nacimiento}</li>
        <li>Lugar de Nacimiento: {persona.lugar_nacimiento}</li>
        <li>Signo sodiacal: {persona.signo_sodiacal}</li>
        <li>Profesion: {persona.profesion}</li>
        <li>pasatiempos: 
        <ul>
          <li>{persona.pasatiempos[0]}</li>
          <li>{persona.pasatiempos[1]}</li>
          <li>{persona.pasatiempos[2]}</li>
          <li>{persona.pasatiempos[3]}</li>
          <li>{persona.pasatiempos[4]}</li>
        </ul>
        </li>
      </ul>
      
    </div>
  )
}

export default App
