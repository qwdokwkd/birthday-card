import { createRoot } from "react-dom/client";

import { PageProvider } from "@/shared/providers";
import { App } from "@/pages/app";

import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <PageProvider>
    <App />
  </PageProvider>,
);
