import './App.css'
import User from './components/User/User'
// import {Jumbotron} from
const friends = [
  { id: 1, name: 'Vova', age: 18 },
  { id: 2, name: 'Sara', age: 32 },
]

function App() {
  const sayHello = () => {
    console.log(`Hello`)
  }
  return (
    // <div className="App">
    <>
      <User age="31" friends={friends} myMethod={sayHello} />

      {/* <Jumbotron> */}
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>lesson 1</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita fugit
        quo minima beatae rem. Eum aperiam harum magni quisquam distinctio
        voluptate ipsam sunt. Ullam natus blanditiis reiciendis culpa temporibus
        suscipit.
      </p>
      {/* </Jumbotron> */}
    </>
    // {/* </div> */}
  )
}

export default App
