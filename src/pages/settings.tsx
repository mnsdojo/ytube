import Header from "@/components/yt/Header";
import YTSettings from "@/components/yt/YTSettings";
import { SaveIcon } from "lucide-react";
import { useMemo } from "react";

function Settings() {
  const handleSave = () => {
    // Implement save functionality here
    console.log("Saving settings...");
  };

  const btn = useMemo(() => ({ onClick: handleSave, icon: SaveIcon }), []);

  return (
    <div className="container mx-auto p-4">
      <Header text="Settings" btn={btn} />
      <YTSettings />
    </div>
  );
}

export default Settings;
