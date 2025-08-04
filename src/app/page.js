
import { SpotlightPreview } from "@/components/Spotlight";
import { TracingBeamDemo } from "@/components/TracingBeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>  
      <SpotlightPreview />
      {/* <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Noether Labs</h1>
      </div> */}
      <TracingBeamDemo />
      <Footer />

    </div>
  );
}
