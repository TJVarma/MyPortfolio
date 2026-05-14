import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(10, 15, 28, 0.9)",
            color: "#f8fafc",
            border: "1px solid rgba(34, 211, 238, 0.3)",
            backdropFilter: "blur(12px)",
          },
        }}
      />
    </div>
  );
}

export default App;
