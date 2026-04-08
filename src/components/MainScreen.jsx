import NumberField from "./NumberField";
import BinBar from "./BinBar";
import IdentityBar from "./IdentityBar";
import SectionOverlay from "./SectionOverlay";

const MainScreen = ({
  activeSection,
  openingId,
  closingId,
  onOpenSection,
  onFlapOpenComplete,
  onCloseSection,
  onContentExitComplete,
  onFlapCloseComplete,
}) => {
  return (
    <div className="relative flex flex-col w-full h-full">
      <IdentityBar />

      {/* Number field box — bordered, padded, fills remaining space */}
      <div className="flex-1 mx-4 my-2 border-t border-b border-[#1a4a6a] relative overflow-hidden">
        <NumberField />
      </div>

      <BinBar
        onOpenSection={onOpenSection}
        openingId={openingId}
        closingId={closingId}
        onFlapOpenComplete={onFlapOpenComplete}
        onFlapCloseComplete={onFlapCloseComplete}
      />

      <SectionOverlay
        section={activeSection}
        onClose={onCloseSection}
        onExitComplete={onContentExitComplete}
      />
    </div>
  );
};

export default MainScreen;
