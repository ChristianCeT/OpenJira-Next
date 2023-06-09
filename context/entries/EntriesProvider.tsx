import { FC, useEffect, useReducer } from "react";

import { Entry } from "@/interfaces";
import { EntriesContext, entriesReducer } from "./";

import { entriesApi } from "@/axiosApi";
import { useSnackbar } from "notistack";

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children: React.ReactNode;
}

/* EStado de la aplicación */
const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  /* reducer, estado inicial, otra función */
  /* Disparar la acción */
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", {
      description,
    });

    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });

      if (showSnackbar)
        enqueueSnackbar("Entry updated", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });

      dispatch({ type: "[Entry] Entry-Updated", payload: data });
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
