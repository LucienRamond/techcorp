import { createContext } from "react";

export type ContentProps = {
  search: string;
};

export type ContextProps = {
  content: ContentProps;
  editContent: (arg0: string) => void;
};

export const ContentContext = createContext<ContextProps>({
  content: {
    search: "",
  },
  editContent: () => {},
});
