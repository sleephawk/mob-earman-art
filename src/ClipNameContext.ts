import { createContext, type Dispatch, type SetStateAction } from "react";

type ClipNameContextType = {
  clip: string;
  setClip: Dispatch<SetStateAction<string>>;
};

export const ClipNameContext = createContext<ClipNameContextType>({
  clip: "idle",
  setClip: () => {}, // allows setting of clip the receiver instead of just
  //the provider
});
