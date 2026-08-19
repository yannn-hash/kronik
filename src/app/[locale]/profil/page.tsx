import { getTranslations } from "next-intl/server";
import { BadgeGallery } from "@/components/profile/BadgeGallery";
import { UserCircle, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: locale === "id" ? "Profil Saya - Kronik" : "My Profile - Kronik",
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {locale === "id" ? "Profil Pengguna" : "User Profile"}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
          {locale === "id" ? "Catatan perjalanan sejarah Anda." : "Your historical journey record."}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center">
            {user?.user_metadata?.avatar_url ? (
              <img src={user.user_metadata.avatar_url} alt="Avatar" className="mx-auto h-24 w-24 rounded-full border-4 border-primary/20 object-cover" />
            ) : (
              <UserCircle className="mx-auto h-24 w-24 text-primary/50" />
            )}
            
            <h2 className="mt-4 text-2xl font-bold text-foreground">
              {user?.user_metadata?.user_name || user?.user_metadata?.full_name || "Sobat Kronik"}
            </h2>
            <p className="text-sm text-muted-foreground">Penjelajah Sejarah</p>
            
            <div className="mt-6 space-y-3 text-sm text-muted-foreground text-left">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="truncate">{user?.email || "Belum Login"}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{locale === "id" ? "Bumi" : "Earth"}</span>
              </div>
            </div>
            
            {!user && (
              <div className="mt-6 rounded-lg bg-red-500/10 p-4 text-center text-sm font-medium text-red-500">
                {locale === "id" ? "Anda belum login. Silakan klik tombol Login di pojok kanan atas." : "You are not logged in. Please click Login on the top right."}
              </div>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <BadgeGallery />
        </div>
      </div>
    </div>
  );
}
