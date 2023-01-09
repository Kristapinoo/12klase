import './App.css';
import AudiR8 from './images/audi_r8.jpg'

const carObject = {
  name: "Audi R8",
  imageURL: "http://localhost:3000/static/media/audi_r8.3603ca61acb90ab8b0ca.jpg",
  description:"jk;sdFBjkdshfuiserafsldfijughdfisugoaisdufgiuasdhdsfgdsigfiusdfgiudsgfiusdfygiysd",
  inStock: true
}
function App() {
  return (
    <div className="car">
      <h1 className='car__title'>{carObject.name}</h1>
      <img src={carObject.imageURL} alt="Audi r8" className='car__image' />
      <p className='car__info'>{carObject.description}
      </p>
      
      <span class='car__stock'>
      {carObject.inStock ? "In Stock" : "Not in stock"}
      </span>
    </div>
  );
}

export default App;