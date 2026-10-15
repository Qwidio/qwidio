import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1220] text-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <section className="py-10 min-h-[95vh] flex">
          <div className="m-auto w-full flex items-center justify-center">
            <h1 className="text-5xl">Qwidio</h1>
          </div>
        </section>
        <section className="min-h-[5vh]">
          <h2 className="w-full text-xs text-center">Scroll down for more</h2>
        </section>
        <section className="pb-14 sm:pb-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
            <h2 id="projects-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Projects
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
              OSS
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <article className="w-full group flex flex-col border border-white/10 bg-[#17112e] transition hover:border-purple-200/40 hover:bg-[#211438]">
              <div className="relative flex h-44 items-end overflow-hidden bg-linear-to-br from-[#33236b] via-[#3c1850] to-[#24102d] p-5">
                <div aria-hidden="true" className="absolute right-6 top-5 h-24 w-24 rotate-12 border border-cyan-100/25 bg-cyan-100/5 transition-transform duration-300 group-hover:rotate-6" />
                <div aria-hidden="true" className="absolute right-12 top-11 h-16 w-16 -rotate-12 border border-white/20 bg-white/5" />
                <Image src={"/cgcclogotrsp.png"} alt={""} width={100} height={100} className="w-1/12 portrait:w-1/4 aspect-square"/>
              </div>
              <a href="https://github.com/Qwidio/CrossGate-Community-Collection" className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">CGCC</h3>
                  <span className="shrink-0 border border-purple-300/20 bg-purple-300/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-purple-200">
                    Completed
                  </span>
                </div>
                <p className="flex-1 text-sm leading-6 text-slate-400">
                  Recreation of Steam the popular PC Game Store 
                </p>
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                  <li className="bg-[#2a1c40] px-2.5 py-1 font-mono text-[10px] text-slate-300">Web-Store</li>
                  <li className="bg-[#2a1c40] px-2.5 py-1 font-mono text-[10px] text-slate-300">API</li>
                  <li className="bg-[#2a1c40] px-2.5 py-1 font-mono text-[10px] text-slate-300">Client Launcher</li>
                </ul>
              </a>
            </article>
          </div>
        </section>

        <section className="mb-12 border border-cyan-200/15 bg-linear-to-r from-[#14283b] to-[#111a2a] p-6 sm:mb-16 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What else do you want?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Here's github link if you really want to see more more
            </p>
          </div>
          <a
            href="https://github.com/Qwidio"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#07111e] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14283b] sm:mt-0"
          >
            Github<span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>
    </main>
  );
}
