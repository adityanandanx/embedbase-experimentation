import SearchBar from "@/lib/components/SearchBar";
import Button from "@/lib/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import magic from "./magicpattern.jpg";

export default async function Home() {
  return (
    <main className="relative gap-5 h-full py-20 px-5">
      <section className="min-h-[512px] flex flex-col justify-center w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-1">
          Using Embedbase with Next js app router
        </h1>
        <Image
          className="-z-10 rounded-md object-cover opacity-50"
          src={magic}
          alt="hero illustration"
          placeholder="blur"
          fill
        />
        <div className="flex flex-col gap-2">
          <div className="w-fit mb-5">
            <SearchBar />
          </div>
          <div className="flex gap-2">
            <Link href={"/upload"}>
              <Button variant={"tertiary"}>Upload</Button>
            </Link>
            <Link href={"/chat"}>
              <Button variant={"tertiary"}>Chat</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
