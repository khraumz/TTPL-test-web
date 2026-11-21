import { useState } from 'react';
import { Navbar, type PortalTab } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfoSection } from './components/InfoSection';
import { BackedBySection } from './components/BackedBySection';
import { UseCasesSection } from './components/UseCasesSection';
import { LabExplorerModal } from './components/LabExplorerModal';

export function App() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalTab, setPortalTab] = useState<PortalTab>('simulation');

  const handleOpenPortal = (tab: PortalTab) => {
    setPortalTab(tab);
    setPortalOpen(true);
  };

  return (
    <div id="top" className="flex flex-col bg-[#F5F5F5] min-h-screen">
      {/* 1. First section: h-screen wrapper containing Navbar (absolute) + HeroSection */}
      <div className="relative h-screen flex flex-col overflow-hidden">
        <Navbar onOpenPortal={handleOpenPortal} />
        <HeroSection onOpenPortal={handleOpenPortal} />
      </div>

      {/* 2. Info Section */}
      <InfoSection onOpenPortal={handleOpenPortal} />

      {/* 3. Backed By / Industry Partners Section */}
      <BackedBySection />

      {/* 4. Use Cases / Grid Modes Section */}
      <UseCasesSection onOpenPortal={handleOpenPortal} />

      {/* Interactive TTPL Portal Modal (Simulations, Syllabus, Hardware, People) */}
      <LabExplorerModal
        isOpen={portalOpen}
        activeTab={portalTab}
        onChangeTab={setPortalTab}
        onClose={() => setPortalOpen(false)}
      />
    </div>
  );
}

export default App;
