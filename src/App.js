import "./App.css";
import Dashboard from "./layout/Dashboard";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navy from "./layout/Navy";
function App() {
  return (
    <div className="App">
      <Navy />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
