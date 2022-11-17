import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { List } from "./list/List";
import { Home } from "./pages/home/Home";
import {Hotel} from "./hotel/Hotel"
function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/hotels" element={<List />} />
           <Route path="/hotels/:id" element={<Hotel /> } />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;