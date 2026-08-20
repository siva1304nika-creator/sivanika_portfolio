import { lazy, Suspense } from "react";
import MarketingNavbar from "../components/layout/MarketingNavbar";

const DigitalMarketing = lazy(() => import("../components/sections/DigitalMarketing"));

export default function MarketingPage() {
  return (
    <>
      <MarketingNavbar />

      <main className="bg-black text-white min-h-screen relative selection:bg-orange-500 selection:text-black">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <DigitalMarketing />
        </Suspense>
      </main>
    </>
  );
}
