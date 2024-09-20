import Header from "@/app/components/Header";
import CTA from "./components/CTA";
import Photos from "./components/Photos";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <Header />
      <main className="grid grid-cols-subgrid col-span-12">
        <CTA />
        <section className="grid grid-cols-subgrid col-span-12 items-center">
          <article className="grid grid-cols-12 grid-rows-12 col-span-6">
            <Photos />
          </article>
          <article className="grid grid-cols-subgrid col-start-8 col-span-5">
            <p className="col-span-5 px-2 text-xl text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis aperiam mollitia exercitationem, soluta maxime harum totam reiciendis, nulla, unde fugiat eligendi repellat perspiciatis? Molestiae ratione ut facere aliquid sed.</p>
          </article>
        </section>
        
      </main>
      
    </div>
  );
}
