import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SpinnerFullPage from "./components/SpinnerFullPage";

const MainPage = lazy(() => import("./pages/MainPage"));
const Recommendation = lazy(() => import("./pages/Recommendation"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
