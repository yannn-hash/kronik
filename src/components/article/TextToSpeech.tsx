"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Square, Pause, Volume2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextToSpeechProps {
  locale: "id" | "en";
  title: string;
}

export function TextToSpeech({ locale, title }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSupported(false);
      return;
    }
    setSupported(true);
    setIsReady(true);

    return () => {
      // Cleanup on unmount
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const getTextToRead = () => {
    // We grab the title, and then the content inside the prose article tag
    const contentElement = document.querySelector(".prose");
    if (!contentElement) return title;
    
    // Create a clone to remove things we don't want to read (like Quiz components)
    const clone = contentElement.cloneNode(true) as HTMLElement;
    
    // Remove quiz components or non-readable elements if they exist
    const quizzes = clone.querySelectorAll(".quiz-container, button");
    quizzes.forEach(q => q.remove());

    const textContent = clone.textContent || "";
    return `${title}. ${textContent}`;
  };

  const handlePlay = () => {
    if (!window.speechSynthesis) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const text = getTextToRead();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.lang = locale === "id" ? "id-ID" : "en-US";
    utterance.rate = 0.95; // Slightly slower for better comprehension of history
    utterance.pitch = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      console.error("Speech synthesis error", e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!supported) return null;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm max-w-sm mb-8 transition-all hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Volume2 className="h-5 w-5" />
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-sm font-semibold text-foreground">
          {locale === "id" ? "Dengarkan Artikel" : "Listen to Article"}
        </span>
        <span className="text-xs text-muted-foreground">
          {isPlaying 
            ? (locale === "id" ? "Sedang memutar..." : "Playing...") 
            : isPaused 
              ? (locale === "id" ? "Dijeda" : "Paused")
              : (locale === "id" ? "Audio AI" : "AI Audio")}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            disabled={!isReady}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-primary hover:bg-primary/10 transition-colors disabled:opacity-50"
            title="Play"
          >
            {!isReady ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4 fill-current" />}
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-primary hover:bg-primary/10 transition-colors"
            title="Pause"
          >
            <Pause className="h-4 w-4 fill-current" />
          </button>
        )}
        
        {(isPlaying || isPaused) && (
          <button
            onClick={handleStop}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted transition-colors"
            title="Stop"
          >
            <Square className="h-4 w-4 fill-current" />
          </button>
        )}
      </div>
    </div>
  );
}
