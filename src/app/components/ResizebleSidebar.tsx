// Imports
import React, { useState } from 'react';
import { HomeIcon, LibraryIcon, Search } from "lucide-react";
import { PlaylistItem } from "./PlaylistItem";
import { WindowTools } from "./WindowTools";

function Sidebar() {
  // Lógica do componente
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);

  // Handlers
  const startDragging = (e) => {
    e.preventDefault();
    setIsDragging(true);
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', stopDragging);
  };

  const onDrag = (e) => {
    if (isDragging) {
      const newWidth = Math.max(e.clientX, 150); // Assegura uma largura mínima
      setSidebarWidth(newWidth);
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('mouseup', stopDragging);
  };

  return (
    <div style={{ width: sidebarWidth, minHeight: '100vh', backgroundColor: '#2D3748' }}>
      {/* Seu JSX aqui */}
    </div>
  );
}

export default Sidebar;
