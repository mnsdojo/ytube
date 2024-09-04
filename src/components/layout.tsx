import { cn } from "@/lib/utils";
import {
  ClockIcon,
  DownloadIcon,
  SettingsIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const linkClass = cn(`
    flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground
    `);

function Layout() {
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <aside className="hiddden w-64 flex flex-col border-r bg-muted/40 p-4 sm:flex">
        <div className="flex items-center gap-2 pb-4">
          <YoutubeIcon className="h-6 w-6" />
          <h1 className="text-2xl font-bold">yTube</h1>
        </div>
        <nav className="flex flex-col gap-4">
          <Link className={linkClass} to="/">
            <DownloadIcon className="h-5 w-5" />
            Downloads
          </Link>

          <Link to="/history" className={linkClass}>
            <ClockIcon className="h-5 w-5" />
            History
          </Link>
          <Link to="/settings" className={linkClass}>
            <SettingsIcon className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </aside>
      <div className="flex-1 p-4 sm:p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
