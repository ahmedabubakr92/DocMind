import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocMind",
  description: "Upload your documents and chat with them instantly using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#4940E4",
              colorBackground: "var(--background)",
              colorText: "var(--foreground)",
              colorTextSecondary: "var(--muted-foreground)",
              colorInputBackground: "var(--card)",
              colorInputText: "var(--foreground)",
              colorNeutral: "var(--muted-foreground)",
              borderRadius: "0.625rem",
              fontFamily: "Inter, sans-serif",
              fontFamilyButtons: "Inter, sans-serif",
              fontSize: "0.875rem",
            },
            elements: {
              // Avatar trigger
              avatarBox: "ring-2 ring-primary/30 hover:ring-primary/60 transition-all duration-150",
              userButtonTrigger: "focus:shadow-none focus:outline-none",

              // Popup card
              userButtonPopoverCard: "border border-border bg-card rounded-[14px] shadow-[0_4px_24px_rgba(73,64,228,0.08)] p-1",
              userButtonPopoverActions: "p-1 gap-0.5",

              // User preview header
              userButtonPopoverUserPreview: "px-3 py-3 mb-1",
              userPreviewMainIdentifier: "text-foreground text-sm font-medium",
              userPreviewSecondaryIdentifier: "text-muted-foreground text-xs",

              // Action buttons
              userButtonPopoverActionButton: "hover:bg-muted text-foreground rounded-[10px] px-3 py-2 transition-colors",
              userButtonPopoverActionButtonText: "text-foreground text-sm",
              userButtonPopoverActionButtonIcon: "text-muted-foreground",

              // Divider
              userButtonPopoverFooter: "hidden",
              dividerLine: "bg-border",

              // Inner card (profile page)
              card: "border border-border bg-card shadow-[0_4px_24px_rgba(73,64,228,0.08)]",
            },
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
