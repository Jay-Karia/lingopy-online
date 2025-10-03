import AppBar from "@/components/app-bar";
import EditorComponent from "@/components/editor";
import Output from "@/components/output";

export default function Home() {
  return (
    <div>
      <AppBar />
      <EditorComponent />
      <Output />
    </div>
  );
}
