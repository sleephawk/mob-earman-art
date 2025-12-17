import { createContext, type RefObject } from "react";
import type { Group } from "three";

export const SkinRefContext = createContext<RefObject<Group | null> | null>(
  null
);
