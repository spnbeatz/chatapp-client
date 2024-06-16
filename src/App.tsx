import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import { ChatPage } from "./pages/chat";
import { AuthScreen } from "./auth/AuthScreen";

function App() {
  return (
    <Routes>
      <Route element={<ChatPage />} path="/" />

    </Routes>
  );
}

export default App;
