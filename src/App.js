import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import { TodosProvider } from "./contexts/TodosProvider";

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <Body />
      </TodosProvider>
    </div>
  );
}

export default App;
