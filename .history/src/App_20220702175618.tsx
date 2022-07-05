import "./global.css";
import { Header } from "./Header";
import { Tasks } from "./Tasks";

function App() {
  return (
    <div className='container'>
      <Header />
      <div>
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
