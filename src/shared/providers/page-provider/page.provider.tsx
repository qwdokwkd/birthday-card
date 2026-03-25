import { useCallback, useState } from "react";
import { PageContext } from "./page.context";

interface IPageProviderProps {
  children: React.ReactNode;
}

const PageProvider: React.FC<IPageProviderProps> = ({ children }) => {
  const [page, setPage] = useState<number>(0);

  const updatePage = useCallback(
    (newPage: number) => {
      if (page === newPage) return;
      setPage(newPage);
    },
    [page, setPage],
  );

  return (
    <PageContext.Provider value={{ page, updatePage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
