import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './components/home/Home';
import { TopHeader } from "./components/topHeader/TopHeader";
import { MyBackTop } from "./ScrollerOn";
function App() {
  let data = [
    { id: 1, url: "/", element: <Home /> },
  ]
  const dataMap = data.map(a => <Route
    key={a.id}
    path={a.url}
    element={a.element} />)
  return (
    <div>
      <TopHeader />
      <Routes>
        {dataMap}
      </Routes>
      <MyBackTop />
    </div>
  );
}

export default App;
