import logo from '../images/logo512.png';
import '../styles/App.css';
import MyForm from '../form';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';


function App() {

const history = useHistory();

  return (
    <div className="App">
      <Header></Header>
        <p className='App-body'>
         <MyForm />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Footer></Footer>
    </div>
  );
}

export default App;
