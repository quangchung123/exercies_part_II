import PostList from './feature/PostList';
import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Page from "./routes/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Page />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
