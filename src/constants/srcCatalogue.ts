export type Catalogue = Record<string, Record<string, string>>;

export const srcCatalogue: Catalogue = {
  rocky: {
    whiteWall: "/assets/art/photos/Rocky.jpg",
    noFrame: "",
    woodNFrame: "",
  },
  oddSignal: {
    whiteWall: "/assets/art/photos/TheOddSignal.jpg",
    noFrame: "",
    woodNFrame: "",
  },
  warthog: {
    whiteWall: "/assets/art/photos/SandiCalledHim'Warthog'.jpg",
    noFrame: "",
    woodNFrame: "",
  },
  autumn: {
    whiteWall: "/assets/art/photos/AutumnClaimsAMartyr.jpg",
    noFrame: "",
    woodNFrame: "",
  },
  jellyfish: {
    whiteWall: "/assets/art/photos/SleeveoftheBoxJellyfish.jpg",
    noFrame: "",
    woodNFrame: "",
  },
  topo: {
    whiteWall: "/assets/art/photos/TopologyVents.jpg",
    noFrame: "",
    woodNFrame: "",
  },
  october: {
    whiteWall: "/assets/art/photos/OctoberLocks.jpg",
    noFrame: "",
    woodNFrame: "",
  },
};

const random = srcCatalogue.rocky.whiteWall;
