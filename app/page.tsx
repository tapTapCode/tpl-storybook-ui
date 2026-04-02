import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-4xl font-bold">Blank Dashboard</h1>
      <p className="text-lg text-muted-foreground">
        Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui
      </p>
      <Button>Get Started</Button>
    </main>
  );
}
