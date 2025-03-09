import ReactDOM from "react-dom/client";

import "./index.css";
import Footer from "./Footer";

const App = () => (
  <Footer />
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);