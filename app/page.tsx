import HomeTopController from "@/components/main-ui/home-top-controller";
import ScrollTextSection from "@/components/main-ui/scroll-text-section";
import ConceptSection from "@/components/main-ui/concept-section";
import StageSection from "@/components/main-ui/stage-section";
import InformationSection from "@/components/main-ui/information-section";
import Application from "@/components/main-ui/application";
import FooterBar from "@/components/main-ui/footer-bar";

export default function Home() {
  return (
    <main className="relative w-full">

      {/* クライアントロジック層 */}
      <HomeTopController>
        {/* ScrollTextSection は Server Component として渡されます */}
        <ScrollTextSection />
      </HomeTopController>

      <div className="relative z-10">
        <ConceptSection />
      </div>

      <div className="relative z-10 w-full h-24 lg:h-32"></div>

      <div className="relative z-10">
        <StageSection />
      </div>

      <div className="relative z-10 w-full bg-white text-black">
        <div className="w-full h-24 lg:h-32"></div>
        <InformationSection />
        <div className="w-full h-24 lg:h-48"></div>

        <Application />
        <div className="w-full h-2 lg:h-38"></div>
        <div className="relative z-50">
          <FooterBar />
        </div>
      </div>
    </main>
  );
}
