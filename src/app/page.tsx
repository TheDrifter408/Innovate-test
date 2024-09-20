import Header from "@/app/components/Header";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <Header />
      <main className="grid grid-cols-subgrid col-span-12">
        <CTA />
        <section className="grid grid-subgrid col-span-12">
          <article className="grid grid-cols-subgrid col-span-6">

          </article>
          <article className="grid grid-cols-subgrid col-span-6">

          </article>
        </section>
      </main>
      
    </div>
  );
}
