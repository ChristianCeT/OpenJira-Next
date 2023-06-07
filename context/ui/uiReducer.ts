import { UIState } from "./";

/* payload: información que se recibe para modificar un nuevo estado */
type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Set Adding Entry"; payload: boolean }
  | { type: "UI - Start Dragging" }
  | { type: "UI - Finish Dragging" };

/* Función pura: Resuelve todo sin salir de la función */
/* state: El estado - action: modificación del estado */
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  /* Que información manipula del estado || Regresa un nuevo estado */
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };

    case "UI - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };

    case "UI - Set Adding Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    case "UI - Start Dragging":
      return {
        ...state,
        isDragging: true,
      };

    case "UI - Finish Dragging":
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
