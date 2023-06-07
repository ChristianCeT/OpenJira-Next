import { UIContext, uiReducer } from ".";
import { FC, useReducer } from "react";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

interface Props {
  children: React.ReactNode;
}

/* EStado de la aplicación */
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  /* reducer, estado inicial, otra función */
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  /* disparar la acción del reducer */

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => dispatch({ type: "UI - Close Sidebar" });

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI - Set Adding Entry", payload: isAdding });
  };

  const startDragging = () => {
    dispatch({ type: "UI - Start Dragging" });
  };

  const endDragging = () => {
    dispatch({ type: "UI - Finish Dragging" });
  };

  return (
    /* ...state, redibujar el estado */
    <UIContext.Provider
      value={{
        ...state,
        //methods
        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,

        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
