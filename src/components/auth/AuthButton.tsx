"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { createClient } from "@/lib/supabase/client";
import { getAbsoluteURL } from "@/lib/url";
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
        redirectTo: getAbsoluteURL("/auth/callback"),
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const [showModal, setShowModal] = useState(false);

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
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
      >
        <LogIn className="h-4 w-4" />
        <span className="hidden sm:inline-block">Login</span>
      </button>

      {showModal && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-xl animate-in fade-in zoom-in duration-200">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-foreground">
                {locale === "id" ? "Masuk ke Akun Anda" : "Sign in to your account"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {locale === "id" ? "Pilih metode login di bawah ini" : "Choose a login method below"}
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleLogin("google")}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Google
              </button>
              
              <button
                onClick={() => handleLogin("github")}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#24292F] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#24292F]/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            </div>
            
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              {locale === "id" ? "Batal" : "Cancel"}
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
