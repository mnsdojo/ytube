import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";
type Theme = "light" | "dark" | "system";

import { useTheme } from "@/components/theme-provider";
const YTTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid gap-2">
      <Label htmlFor="theme">Theme</Label>
      <RadioGroup
        value={theme as Theme}
        onValueChange={(value: Theme) => setTheme(value)}
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem id="theme-light" value="light" />
          <Label htmlFor="theme-light">Light</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="theme-dark" value="dark" />
          <Label htmlFor="theme-dark">Dark</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="theme-system" value="system" />
          <Label htmlFor="theme-system">System</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

function YTSettings() {
  return (
    <main className="grid gap-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription>
            Manage your general settings for the YouTube Downloader app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <YTTheme />
          </div>
        </CardContent>
      </Card>
      <Card></Card>
    </main>
  );
}

export default YTSettings;
