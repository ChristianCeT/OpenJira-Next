import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;

  startDragging: () => void;
  endDragging: () => void;

  setIsAddingEntry: (entry: boolean) => void;
}
/* Solo creación del contexto */
export const UIContext = createContext({} as ContextProps);
