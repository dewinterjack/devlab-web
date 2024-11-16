import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devlab",
  description: "Dev playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          workSans.className,
          "dark:bg-secondaryBlack inset-0 flex min-h-[100dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]"
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
