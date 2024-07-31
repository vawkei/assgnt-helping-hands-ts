import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MatrixPage from "./pages/MatrixPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matrix" element={<MatrixPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
