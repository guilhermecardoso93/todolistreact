import "./global.css";
import { Header } from "./Header";
import { Tasks } from "./Tasks";


interface TaskProps {
  tasks: string;
}
function App( props: TaskProps) {
  return (
    <>
      <Header />
      <div>
        <Tasks tasks={props.tasks}/>
      </div>
    </>
  );
}

export default App;
