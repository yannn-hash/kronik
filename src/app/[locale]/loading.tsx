import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

export default function Loading() {
  const t = useTranslations("common");

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <p className="text-muted-foreground animate-pulse font-medium tracking-wide">
        {t("loadingHistory")}
      </p>
    </div>
  );
}
