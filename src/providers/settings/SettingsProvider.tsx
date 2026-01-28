import React, { useState } from "react";
import { ContentContext, type ContentProps } from "./SettingsContext";

interface Props {
  children?: React.ReactNode;
}

const SettingsProvider: React.FC<Props> = ({ children }) => {
  const [content, setContent] = useState<ContentProps>({
    search: "",
  });

  function editContentHandler(newSearch: string) {
    return setContent({ search: newSearch });
  }

  return (
    <ContentContext.Provider
      value={{
        content: {
          search: content.search,
        },
        editContent: editContentHandler,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default SettingsProvider;
