import { useMemo } from "react";
import Header from "@/components/yt/Header";
import { TrashIcon } from "lucide-react";

function History() {
  const handleDeleteAll = () => {};
  const btn = useMemo(
    () => ({ onClick: handleDeleteAll, icon: TrashIcon }),
    []
  );

  return (
    <>
      <div>
        <Header btn={btn} text="History" />
      </div>
    </>
  );
}

export default History;
