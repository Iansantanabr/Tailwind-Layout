import { Home as HomeIcon, Search, LibraryIcon, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from "lucide-react";
import Image from "next/image";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

 export default function Home() {
  return (
    <main> 
      <div className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar/>
          <main className="flex-1 p-8">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-2">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/40 p-2">
                <ChevronRight />
              </button>
            </div>
            <h1 className="font-bold text-4xl mt-8">Good Affternoon</h1>

            <div  className="grid grid-cols-3  gap-4 overflow-hidden mt-4">
              <a href="" className=" group bg-white/5 hover:bg-white/10  transition-colors rounded flex items-center overflow-hidden gap-4">
                <Image src="/eric.jpg"  width={112} height={112}  alt="capa do álbum"/>
                  <strong className="text-sm">Eric Clapton - Tears In Heaven</strong>
                  <button className="p-2 rounded-full bg-green-500/70 text-black fill-black ml-auto mr-5 invisible group-hover:visible animate-pulse"  >
                    <Play fill='bg-black' />
                  </button>
                </a>
               
              <a href="" className=" group bg-white/5 hover:bg-white/10  transition-colors rounded flex items-center overflow-hidden gap-4">
                <Image src="/eric.jpg"  width={112} height={112}  alt="capa do álbum"/>
                  <strong className="text-sm">Eric Clapton - Tears In Heaven</strong>
                  <button className="p-2 rounded-full bg-green-500/70 text-black fill-black ml-auto mr-5 invisible group-hover:visible animate-pulse"  >
                    <Play fill='bg-black' />
                  </button>
                </a>
               
              <a href="" className=" group bg-white/5 hover:bg-white/10  transition-colors rounded flex items-center overflow-hidden gap-4">
                <Image src="/eric.jpg"  width={112} height={112}  alt="capa do álbum"/>
                  <strong className="text-sm">Eric Clapton - Tears In Heaven</strong>
                  <button className="p-2 rounded-full bg-green-500/70 text-black fill-black ml-auto mr-5 invisible group-hover:visible animate-pulse"  >
                    <Play fill='bg-black' />
                  </button>
                </a>
               
              <a href="" className=" group bg-white/5 hover:bg-white/10  transition-colors rounded flex items-center overflow-hidden gap-4">
                <Image src="/eric.jpg"  width={112} height={112}  alt="capa do álbum"/>
                  <strong className="text-sm">Eric Clapton - Tears In Heaven</strong>
                  <button className="p-2 rounded-full bg-green-500/70 text-black fill-black ml-auto mr-5 invisible group-hover:visible animate-pulse"  >
                    <Play fill='bg-black' />
                  </button>
                </a>
               
              <a href="" className=" group bg-white/5 hover:bg-white/10  transition-colors rounded flex items-center overflow-hidden gap-4">
                <Image src="/eric.jpg"  width={112} height={112}  alt="capa do álbum"/>
                  <strong className="text-sm">Eric Clapton - Tears In Heaven</strong>
                  <button className="p-2 rounded-full bg-green-500/70 text-black fill-black ml-auto mr-5 invisible group-hover:visible animate-pulse"  >
                    <Play fill='bg-black' />
                  </button>
                </a>
               
              <a href="" className=" group bg-white/5 hover:bg-white/10  transition-colors rounded flex items-center overflow-hidden gap-4">
                <Image src="/eric.jpg"  width={112} height={112}  alt="capa do álbum"/>
                  <strong className="text-sm">Eric Clapton - Tears In Heaven</strong>
                  <button className="p-2 rounded-full bg-green-500/70 text-black fill-black ml-auto mr-5 invisible group-hover:visible animate-pulse"  >
                    <Play fill='bg-black' />
                  </button>
                </a>
               

            </div>

            <h2 className="font-bold text-2xl mt-8">Made for Ian Santana</h2>

              <div className="flex col-auto gap-4 mt-4">
                <a href="" className="bg-white/5 hover:bg-white/10 flex flex-col p-2 gap-2 rounded style={{ maxWidth: '180px', height: '260px' }}">
                <Image src="/eric.jpg" className="w-full" width={120} height={120} alt="capa do álbum"/>
                  <strong>Daily Mix</strong>
                  <span className="text-xs text-zinc-500">Vários Artistas, Girls faith no more - Paramore</span>
                </a>
                <a href="" className="bg-white/5 hover:bg-white/10 flex flex-col p-2 gap-2 rounded style={{ maxWidth: '180px', height: '260px' }}">
                  <Image src="/eric.jpg" className="w-full max-w-xs" width={120} height={120}  alt="capa do álbum"/>
                  <strong>Daily Mix</strong>
                  <span className="text-xs text-zinc-500">Vários Artistas, Girls faith no more - Paramore</span>
                </a>
                <a href="" className="bg-white/5 hover:bg-white/10 flex flex-col p-2 gap-2 rounded style={{ maxWidth: '180px', height: '260px' }}">
                  <Image src="/eric.jpg" className="w-full" width={120} height={120}  alt="capa do álbum"/>
                  <strong >Daily Mix</strong>
                  <span className="text-xs text-zinc-500">Vários Artistas, Girls faith no more - Paramore</span>
                </a>
                <a href="" className="bg-white/5 hover:bg-white/10 flex flex-col p-2 gap-2 rounded style={{ maxWidth: '180px', height: '260px' }}">
                  <Image src="/eric.jpg" className="w-full" width={120} height={120}  alt="capa do álbum"/>
                  <strong>Daily Mix</strong>
                  <span className="text-xs text-zinc-500">Vários Artistas, Girls faith no more - Paramore</span>
                </a>
                <a href="" className="bg-white/5 hover:bg-white/10 flex flex-col p-2 gap-2 rounded style={{ maxWidth: '180px', height: '260px' }}">
                  <Image src="/eric.jpg" className="w-full" width={120} height={120}  alt="capa do álbum"/>
                  <strong>Daily Mix</strong>
                  <span className="text-xs text-zinc-500">Vários Artistas, Girls faith no more - Paramore</span>
                </a>
              </div>
          </main>

        </div>
      </div>
      
<Footer />
    </main>
  );
}
