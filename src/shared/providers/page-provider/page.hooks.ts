import { useContext } from "react";
import type { IPageContextAttributes } from "./page.models";
import { PageContext } from "./page.context";

export const usePage = (): IPageContextAttributes => {
  const ctx = useContext(PageContext);

  if (!ctx) throw new Error();
  return ctx;
};
