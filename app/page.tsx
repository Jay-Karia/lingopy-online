import AppBar from "@/components/app-bar";
import Editor from "@/components/editor";
import Output from "@/components/output";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Editor />
      <Output />
    </div>
  );
}
