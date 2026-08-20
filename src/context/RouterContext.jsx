import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const RouterContext = createContext({
  currentPath: "/",
  currentHash: "",
  navigate: () => {},
});

export function RouterProvider({ children }) {
  const getPath = () => {
    if (typeof window === "undefined") return "/";
    const path = window.location.pathname.toLowerCase().replace(/\/$/, "") || "/";
    return path.startsWith("/marketing") ? "/marketing" : "/";
  };

  const getHash = () => {
    if (typeof window === "undefined") return "";
    return window.location.hash.replace("#", "");
  };

  const [currentPath, setCurrentPath] = useState(getPath);
  const [currentHash, setCurrentHash] = useState(getHash);

  const navigate = useCallback((targetPath, targetHash = "") => {
    const cleanPath = targetPath.toLowerCase().replace(/\/$/, "") || "/";
    const normalizedPath = cleanPath.startsWith("/marketing") ? "/marketing" : "/";
    const hashString = targetHash ? `#${targetHash.replace("#", "")}` : "";
    const newUrl = `${normalizedPath === "/" ? "" : normalizedPath}${hashString}` || "/";

    if (window.location.pathname !== normalizedPath || window.location.hash !== hashString) {
      window.history.pushState({ path: normalizedPath, hash: targetHash }, "", newUrl);
    }

    const pathChanged = currentPath !== normalizedPath;
    setCurrentPath(normalizedPath);
    setCurrentHash(targetHash.replace("#", ""));

    if (pathChanged && !targetHash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetHash) {
      setTimeout(() => {
        const el = document.getElementById(targetHash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      const newPath = getPath();
      const newHash = getHash();
      setCurrentPath(newPath);
      setCurrentHash(newHash);

      if (newHash) {
        setTimeout(() => {
          const el = document.getElementById(newHash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, currentHash, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}
