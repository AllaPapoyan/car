import "./assets/style/index.scss"
import './App.css';
import Header from "./components/header";
import Bg from "./components/bg-component";
import Service from './components/service'
import Slides from './components/slider'
import Collections from "./components/collections";
function App() {
  return (
    <div className="App">
       <Header />
       <Bg />
      <Service />
      <Slides />
      <Collections />
    </div>
  );
}

export default App;
