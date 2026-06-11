"use client";

import Logo from "@/app/icon.svg";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, Show } from "@clerk/nextjs";
import {
  ArrowRight,
  FileText,
  LogIn,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background [background-image:radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(73,64,228,0.10),transparent)] dark:[background-image:radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(71,67,219,0.22),transparent)]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="DocMind Logo" width={28} height={28} />
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Doc<span className="text-primary">Mind</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Show when="signed-in">
            <UserButton />
          </Show>
          <Show when="signed-out">
            <SignInButton>
              <Button variant="outline" className="h-9 px-4 text-sm">
                Sign in
              </Button>
            </SignInButton>
          </Show>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-screen-xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl leading-tight mb-6">
          Ask anything,
          <br />
          <span className="text-primary">Your documents answer.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-10">
          Upload any document and have a real conversation with it. DocMind
          reads, understands, and cites exactly where every answer comes from.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 mb-6">
          <Show when="signed-in">
            <Link href="/dashboard">
              <Button className="h-11 px-6 text-sm gap-2">
                Go to Dashboard
                <ArrowRight size={16} />
              </Button>
            </Link>
          </Show>
          <Show when="signed-out">
            <SignInButton>
              <Button className="h-11 px-6 text-sm gap-2">
                Get started free
                <LogIn size={16} />
              </Button>
            </SignInButton>
          </Show>
          <Link href="#how-it-works">
            <Button
              variant="outline"
              className="h-11 px-6 text-sm border-border text-foreground hover:bg-card"
            >
              See how it works
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <p className="text-xs text-muted-foreground mb-16">
          No credit card required · Free tier available
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: FileText, label: "PDF, Word, TXT and more" },
            { icon: Shield, label: "Cited answers with sources" },
            { icon: Zap, label: "Instant upload and chat" },
            { icon: Sparkles, label: "Powered by AI + RAG" },
          ].map(function renderPill({ icon: Icon, label }) {
            return (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground"
              >
                <Icon size={14} className="text-primary" />
                {label}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
