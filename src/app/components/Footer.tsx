import { Laptop2, LayoutList, Maximize2, Mic2, Shuffle, SkipBack, Volume, Play,SkipForward, Repeat } from "lucide-react";
import Image from "next/image";

export function Footer(){
    return(
        <footer className="bg-zinc-900 border-zinc-700 p-4 flex flex-auto justify-between fixed md:fixed w-full bottom-0 " >
        <div className="flex items-center gap-2">
        <Image src="/eric.jpg" className="w-full" width={40} height={40}  alt="capa do álbum"/>
        <div className="flex flex-col gap-1">
          <strong>Artista</strong>
          <span className="text-xs text-zinc-500">Nome da Música</span>
        </div>
    
        </div>
        <div className="flex flex-col items-center drop-shadow-2xl shadow-black">
          <div className="flex items-center gap-4">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>
    
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black fill-black ml-auto animate-pulse"  >
              <Play fill='bg-black' />
            </button>
    
            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
            
            </div>
    
            <div className="flex items-center gap-4">
              <span className="text-xs text-zinc-400">0:31</span>
                <div className="h-2 rounded-full w-96 bg-zinc-500">
                  <div className="bg-zinc-200 w-40 h-2 rounded-full"></div>
    
                </div>
              <span className="text-xs text-zinc-400">2:14</span>
            </div>
          
    
        </div>
    
        <div className="flex items-center gap-2">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
          </div>
          <Maximize2 size={20} />
    
        </div>
    
      </footer>
    )
} 