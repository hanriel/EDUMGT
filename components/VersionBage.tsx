import { Badge } from "@/components/ui/badge";

const { version } = require("@/package.json");
const env = process.env.NODE_ENV;

export default function VersionBage() {
  return (
    <>
      <Badge
        variant={env == "development" ? "destructive" : "outline"}
        className="ml-2"
      >
        v {version}
      </Badge>
    </>
  );
}
