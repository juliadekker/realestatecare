import './App.css';
import './styles/index.scss';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <>
      <div className='left-top-corner-green'></div>
      <div className='left-top-corner-gray'></div>
      <div className='right-bottom-corner-green'></div>
      <div className='right-bottom-corner-gray'></div>
      <HelloWorld />
    </>
  );
}

export default App;
