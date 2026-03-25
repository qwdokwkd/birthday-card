import { createContext } from "react";

import type { IPageContextAttributes } from "./page.models";

export const PageContext = createContext<IPageContextAttributes | null>(null);
