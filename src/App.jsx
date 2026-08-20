import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/loader/Loader";
import MainPortfolio from "./pages/MainPortfolio";
import MarketingPage from "./pages/MarketingPage";
import { RouterProvider, useRouter } from "./context/RouterContext";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const { currentPath } = useRouter();

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <AnimatePresence mode="wait">
          {currentPath === "/marketing" ? (
            <motion.div
              key="marketing-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <MarketingPage />
            </motion.div>
          ) : (
            <motion.div
              key="portfolio-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <MainPortfolio />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

