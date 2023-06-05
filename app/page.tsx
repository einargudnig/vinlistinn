import Image from "next/image";
import { Footer } from "@/components/footer";
import { SmallCard } from "@/components/smallcard";
import { DeluxeCard } from "@/components/deluxecard";
import { MixedCard } from "@/components/mixedcard";

export default function Home() {
  return (
    <>
      {/* <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img sm:bg-fixed sm:bg-center sm:bg-no-repeat">
        <div className="flex flex-col items-center justify-center">
          <div className="p-5 text-3xl font-semibold bg-gray-300 bg-opacity-50 rounded-xl mb-2">
            Vínlistinn
          </div>
          <div className="mt-2 text-xl font-medium">
            Gæðavín frá litlum og fjölskyldureknum vínekrum
          </div>
        </div>
      </header> */}
      <header className="relative h-screen mb-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/midjourney-wine.png"
            alt="Background Image"
            className="w-full h-full object-cover"
            width={1620}
            height={800}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold text-white bg-gray-300 bg-opacity-50 p-5 rounded-xl">
            Vínlistinn
          </h1>
          <p className="mt-2 text-xl font-medium text-white">
            Gæðavín frá litlum og fjölskyldureknum vínekrum
          </p>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center">
        <div className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-3">
          <SmallCard />
          <DeluxeCard />
          <MixedCard />
        </div>
        {/* <div className="w-1/3">Wine Bottle</div> */}

        <div className="m-6 border-1 border-gray-300 rounded-md">
          Síðan er vinnslu, fylgstu með!
        </div>

        <div className="grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left mt-12">
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Um Vínlistann{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Hver erum við?
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Áskrift{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Við erum með nokkrar áskriftir í boði
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Vínið okkar{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Við einblínum á minni og fjölskyldureknar vínekrur.
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Vín 101{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Ýmis fróðleikur um Vín
            </p>
          </a>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
