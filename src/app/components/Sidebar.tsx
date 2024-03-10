import { HomeIcon, LibraryIcon, Search } from "lucide-react";
import { PlaylistItem } from "./PlaylistItem";
import { WindowTools } from "./WindowTools";






export function Sidebar(){
    return(          
    <aside className="w-72 | bg-zinc-950 p-6 h-screen">
    <WindowTools />
    <nav className="space-y-5 mt-10">
      <a href="#" className="flex items-center gap-3 text-sm  font-semibold text-zinc-100  ">
        <HomeIcon />
        Home
      </a>
      <a href="#" className="flex items-center gap-3 text-sm  font-semibold text-zinc-100  ">
        <Search />
        Search
      </a>
      <a href="#" className="flex items-center gap-3 text-sm  font-semibold text-zinc-100  ">
        <LibraryIcon />
        Library
      </a>
    </nav> 
    
    <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2 text-zinc-500 text-sm">
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
    </nav>


</aside>)
} 