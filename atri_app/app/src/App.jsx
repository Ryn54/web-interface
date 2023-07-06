import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import AssetHash from "./pages/AssetHash.jsx";
import Registry from "./pages/Registry.jsx";
import Test from "./pages/Test.jsx";
import Test from "./pages/Test.jsx";
import Table from "./pages/Table.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/AssetHash" element={<AssetHash />} />
<Route path="/Registry" element={<Registry />} />
<Route path="/test" element={<Test />} />
<Route path="/test" element={<Test />} />
<Route path="/table" element={<Table />} />
    </Routes>
  );
}
