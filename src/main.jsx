import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="flex w-32 h-32 bg-red-400">asdf</div>
    </StrictMode>
);
