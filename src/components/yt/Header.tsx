import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

interface HeaderProps {
  text: string;
  btn: {
    onClick: () => void;
    icon: LucideIcon;
  };
}

function Header({ text, btn: { icon: Icon, onClick } }: HeaderProps) {
  return (
    <header className="flex items-center justify-between pb-4 border-b">
      <h2 className="text-3xl font-bold">{text}</h2>
      <div className="flex items-center gap-2">
        <Button
          onClick={onClick}
          variant="outline"
          size="icon"
          className="rounded-full"
        >
          <Icon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
