import { ShieldCheck, ShieldAlert, HelpCircle } from "lucide-react";
import { type ConfidenceLevel } from "@/types/history";
import { cn } from "@/lib/utils";

interface ConfidenceBadgeProps {
  level: ConfidenceLevel;
  locale: "id" | "en";
}

const labels = {
  id: {
    verified: "Terverifikasi (Konsensus Historis)",
    probable: "Kemungkinan Besar (Bukti Kuat)",
    disputed: "Diperdebatkan (Berbagai Teori)",
  },
  en: {
    verified: "Verified (Historical Consensus)",
    probable: "Probable (Strong Evidence)",
    disputed: "Disputed (Multiple Theories)",
  },
};

const styles = {
  verified: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300",
  probable: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300",
  disputed: "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300",
};

const icons = {
  verified: ShieldCheck,
  probable: ShieldAlert,
  disputed: HelpCircle,
};

export function ConfidenceBadge({ level, locale }: ConfidenceBadgeProps) {
  const Icon = icons[level];

  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium", styles[level])}>
      <Icon className="h-4 w-4" />
      <span>{labels[locale][level]}</span>
    </div>
  );
}
