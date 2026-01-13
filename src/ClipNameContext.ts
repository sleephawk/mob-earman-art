import { createContext, type Dispatch, type SetStateAction } from "react";

type ClipNameContextType = {
  clip: string;
  setClip: Dispatch<SetStateAction<string>>;
};

export const ClipNameContext = createContext<ClipNameContextType>({
  clip: "idle",
  setClip: () => {}, // placeholder, never actually used
});
