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
  verified: "badge-verified",
  probable: "badge-probable",
  disputed: "badge-disputed",
};

const icons = {
  verified: ShieldCheck,
  probable: ShieldAlert,
  disputed: HelpCircle,
};

export function ConfidenceBadge({ level, locale }: ConfidenceBadgeProps) {
  const Icon = icons[level];

  return (
    <div className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide shadow-xs transition-colors", styles[level])}>
      <Icon className="h-3.5 w-3.5 shrink-0 stroke-[2.2]" />
      <span>{labels[locale][level]}</span>
    </div>
  );
}
