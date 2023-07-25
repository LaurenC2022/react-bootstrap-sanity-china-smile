import { createRoot } from "react-dom/client";
import Previewer from "./Previewer";
import EditorView from "./EditorView";
import "./style.scss";
import * as bootstrap from "bootstrap";
import AccordionSample from "./AccordionSample";

const App = () => {
  return (
    <div>
      <header>
        <h1>Hello world from App!</h1>
      </header>
      <EditorView />
      <Previewer />
      <AccordionSample />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
