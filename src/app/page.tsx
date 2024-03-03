import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Input className="m-3 w-60" placeholder="Pesquisar cidade ou FATEC" />
    </main>
  );
}
