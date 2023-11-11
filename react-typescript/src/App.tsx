
import { title } from 'process';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/status';
import Heading from './components/Heading';
import Wrapper from './components/Wrapper';

function App() {
  const fullName = {
    firstName: 'Sourav',
    lastName: 'Chakraborty'
  }
  const list = [
    {
      id: 1,
      title: 'React',
      price: 200
    },
    {
      id: 2,
      title: 'Angular',
      price: 300
    },
    {
      id: 3,
      title: 'Vue',
      price: 400
    }
  ]
  
  return (
    <div className="App">
      hello 
      {/* <Greet name="Soumya" add="Kolkata" age={20} isLoggedIn={false}/> */}
      {/* <Person identity={fullName} /> */}
      {/* <PersonList items={list} /> */}
      {/* <Status status="error"/> */}
      <Wrapper>
        <Heading>Its a child Component</Heading>
      </Wrapper>
    </div>
  );
}

export default App;
