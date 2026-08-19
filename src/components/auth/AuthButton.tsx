"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { LogIn, LogOut, Loader2 } from "lucide-react";
import type { User } from "@supabase/supabase-js";

export function AuthButton({ locale }: { locale: "id" | "en" }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogin = async (provider: "github" | "google") => {
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-24 h-9 bg-muted rounded-full animate-pulse">
        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (user) {
    return (
      <button
        onClick={handleLogout}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        title={user.email}
      >
        <LogOut className="h-4 w-4" />
        <span className="hidden sm:inline-block">Logout</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLogin("google")}
        className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700"
      >
        <LogIn className="h-4 w-4" />
        <span className="hidden sm:inline-block">Google</span>
      </button>
      <button
        onClick={() => handleLogin("github")}
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
      >
        <LogIn className="h-4 w-4" />
        <span className="hidden sm:inline-block">GitHub</span>
      </button>
    </div>
  );
}
