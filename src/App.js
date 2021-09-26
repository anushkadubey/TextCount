import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';

function App() {
  return (
    <>
    <Navbar title="TextCount" />
    <div className="container">
    <Form heading="Enter the text to analyze" />
    </div>
    </>
  );
}

export default App;
