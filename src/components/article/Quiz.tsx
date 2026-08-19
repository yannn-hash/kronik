"use client";

import { useState, useEffect } from "react";
import { type QuizData } from "@/types/history";
import { CheckCircle2, XCircle, BrainCircuit, ArrowRight, Trophy, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Link } from "@/i18n/routing";

interface QuizProps {
  quizData: QuizData;
  locale: "id" | "en";
}

export function Quiz({ quizData, locale }: QuizProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setUserId(session.user.id);
    });
  }, [supabase]);

  const question = quizData.questions[currentQuestionIdx];
  const isCorrect = selectedOption === question.correctAnswerIndex;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = async () => {
    if (currentQuestionIdx < quizData.questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
      await saveScoreToDatabase();
    }
  };

  const saveScoreToDatabase = async () => {
    if (!userId) return; // Must be logged in to save
    
    setIsSaving(true);
    const maxScore = quizData.questions.length;
    const percentage = Math.round((score / maxScore) * 100);

    try {
      // Save Quiz Score
      const { error: scoreError } = await supabase.from("quiz_scores").upsert({
        user_id: userId,
        article_slug: quizData.articleSlug,
        score: score,
        max_score: maxScore,
      }, { onConflict: "user_id, article_slug" });

      if (scoreError) throw scoreError;

      // Award Badge if Perfect Score
      if (percentage === 100) {
        // Determine badge ID based on article
        let badgeId = null;
        if (quizData.articleSlug === "peradaban-mesir-kuno") badgeId = "b1";
        if (quizData.articleSlug === "revolusi-prancis") badgeId = "b2";
        if (quizData.articleSlug === "peradaban-mesopotamia") badgeId = "b3";
        if (quizData.articleSlug === "kejayaan-yunani-kuno") badgeId = "b4";
        if (quizData.articleSlug === "kekaisaran-romawi") badgeId = "b5";
        if (quizData.articleSlug === "kelahiran-islam") badgeId = "b6";
        if (quizData.articleSlug === "kekaisaran-mongol") badgeId = "b7";
        if (quizData.articleSlug === "renaisans-eropa") badgeId = "b8";
        if (quizData.articleSlug === "penjelajahan-columbus") badgeId = "b9";
        if (quizData.articleSlug === "revolusi-industri") badgeId = "b10";
        if (quizData.articleSlug === "kemerdekaan-indonesia") badgeId = "b11";
        if (quizData.articleSlug === "runtuhnya-tembok-berlin") badgeId = "b12";
        if (quizData.articleSlug === "peradaban-lembah-indus") badgeId = "b13";
        if (quizData.articleSlug === "dinasti-shang") badgeId = "b14";
        if (quizData.articleSlug === "kekaisaran-maurya") badgeId = "b15";
        if (quizData.articleSlug === "masa-keemasan-islam") badgeId = "b16";
        if (quizData.articleSlug === "kekaisaran-aztec") badgeId = "b17";
        if (quizData.articleSlug === "kekaisaran-inca") badgeId = "b18";
        if (quizData.articleSlug === "pelayaran-zheng-he") badgeId = "b19";
        if (quizData.articleSlug === "perang-dunia-1") badgeId = "b20";
        if (quizData.articleSlug === "perang-dunia-2") badgeId = "b21";
        if (quizData.articleSlug === "pendaratan-bulan") badgeId = "b22";
        
        if (badgeId) {
          await supabase.from("user_badges").upsert({
            user_id: userId,
            badge_id: badgeId
          }, { onConflict: "user_id, badge_id" });
        }
      }
      setSaveSuccess(true);
    } catch (error) {
      console.error("Error saving quiz score:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
    setSaveSuccess(false);
  };

  if (showResults) {
    const percentage = Math.round((score / quizData.questions.length) * 100);
    
    return (
      <div className="my-12 rounded-2xl border-2 border-primary/20 bg-card p-8 text-center shadow-lg">
        <Trophy className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h3 className="mb-2 text-2xl font-bold text-foreground">
          {locale === "id" ? "Kuis Selesai!" : "Quiz Completed!"}
        </h3>
        <p className="mb-6 text-lg text-muted-foreground">
          {locale === "id" ? "Skor Akhir Anda:" : "Your Final Score:"} <strong className="text-primary">{score} / {quizData.questions.length}</strong> ({percentage}%)
        </p>
        
        <div className="mb-8 p-4 bg-muted/50 rounded-lg inline-block text-sm">
          {!userId ? (
            <p className="text-muted-foreground">
              {locale === "id" 
                ? "💡 Login dengan GitHub untuk menyimpan skor dan mengoleksi Lencana." 
                : "💡 Login with GitHub to save your score and collect Badges."}
            </p>
          ) : isSaving ? (
            <p className="flex items-center gap-2 text-primary">
              <Loader2 className="h-4 w-4 animate-spin" /> 
              {locale === "id" ? "Menyimpan hasil ke database..." : "Saving results to database..."}
            </p>
          ) : saveSuccess ? (
            <div className="text-green-600 dark:text-green-400 font-medium">
              <p>✓ {locale === "id" ? "Skor berhasil disimpan di profil Anda!" : "Score saved successfully to your profile!"}</p>
              {percentage === 100 && (
                <p className="mt-1 flex items-center justify-center gap-1">
                  <CheckCircle2 className="h-4 w-4" /> 
                  {locale === "id" ? "Lencana Baru Terbuka! Cek halaman Profil." : "New Badge Unlocked! Check your Profile."}
                </p>
              )}
            </div>
          ) : (
            <p className="text-red-500">
              {locale === "id" ? "Gagal menyimpan skor." : "Failed to save score."}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
          >
            {locale === "id" ? "Ulangi Kuis" : "Retry Quiz"}
          </button>
          
          <Link
            href="/profil"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            {locale === "id" ? "Lihat Profil Saya" : "View My Profile"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 rounded-2xl border-2 border-border bg-card p-6 sm:p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
        <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
          <BrainCircuit className="h-6 w-6 text-primary" />
          {quizData.title[locale]}
        </h3>
        <span className="rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">
          {currentQuestionIdx + 1} / {quizData.questions.length}
        </span>
      </div>

      <div className="mb-8">
        <h4 className="mb-4 text-lg font-medium text-foreground">
          {question.question[locale]}
        </h4>
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let stateClass = "border-border hover:border-primary/50 bg-background";
            
            if (isSubmitted) {
              if (idx === question.correctAnswerIndex) {
                stateClass = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
              } else if (idx === selectedOption) {
                stateClass = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400";
              } else {
                stateClass = "border-border opacity-50 bg-background";
              }
            } else if (selectedOption === idx) {
              stateClass = "border-primary bg-primary/5 text-primary";
            }

            return (
              <button
                key={idx}
                disabled={isSubmitted}
                onClick={() => setSelectedOption(idx)}
                className={cn(
                  "w-full rounded-xl border-2 p-4 text-left font-medium transition-all",
                  stateClass
                )}
              >
                {opt[locale]}
              </button>
            );
          })}
        </div>
      </div>

      {isSubmitted && (
        <div className={cn(
          "mb-6 rounded-xl p-4 flex gap-3",
          isCorrect ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
        )}>
          {isCorrect ? <CheckCircle2 className="h-6 w-6 shrink-0" /> : <XCircle className="h-6 w-6 shrink-0" />}
          <div>
            <p className="font-bold mb-1">{isCorrect ? (locale === "id" ? "Benar!" : "Correct!") : (locale === "id" ? "Salah!" : "Incorrect!")}</p>
            <p className="text-sm">{question.explanation[locale]}</p>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        {!isSubmitted ? (
          <button
            disabled={selectedOption === null}
            onClick={handleSubmit}
            className="rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {locale === "id" ? "Jawab" : "Submit"}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 font-semibold text-background transition-all hover:bg-foreground/90"
          >
            {currentQuestionIdx === quizData.questions.length - 1 
              ? (locale === "id" ? "Lihat Hasil" : "See Results") 
              : (locale === "id" ? "Selanjutnya" : "Next")}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
