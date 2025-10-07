import AppBar from "@/components/app-bar";
import EditorComponent from "@/components/editor";
import Output from "@/components/output";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AppBar />
      <EditorComponent />
      <Output />
      <footer className="fixed bottom-2 right-2 text-sm text-muted-foreground">
        Made with 💗 by <Link href="https://github.com/Jay-Karia" target="_blank">Jay Karia</Link> and <Link href="https://github.com/shaunbenedict" target="_blank">
        S. Shaun Benedict</Link>
      </footer>
    </div>
  );
}
