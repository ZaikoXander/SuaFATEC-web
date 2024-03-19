import { Input } from "@/components/ui/input";
import GoogleMaps from "@/components/GoogleMaps";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Input className="m-3 w-60 absolute z-10" placeholder="Pesquisar cidade ou FATEC" />
      <GoogleMaps />
    </main>
  );
}
