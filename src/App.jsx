import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import OffCanvasMenu from "./components/OffCanvasMenu";

import "./App.css";

import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Header />
      <OffCanvasMenu />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
