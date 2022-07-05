import "./global.css";
import { Header } from "./Header";
import { Tasks } from "./Tasks";

function App() {
  return (
    <>
      <Header />
      <div>
        <Tasks/>
      </div>
    </>
  );
}

export default App;
