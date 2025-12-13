import NavComp from "./NavComp";

export default function Nav({
  onNavClick,
  opFromParent,
  visible,
}: {
  onNavClick: (value: string, cl: string) => void;
  opFromParent: number;
  visible: boolean;
}) {
  const translateAndScale = (n1: number, n2: number = n1): string => {
    return `translate(${n1}%, ${n2}%) scale(1.5)`;
  };
  return (
    <nav>
      <ul className="nav-ul">
        <NavComp
          title="Bio"
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
          visible={visible}
        />
        <NavComp
          title="Art"
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
          visible={visible}
        />
        <NavComp
          title="Events"
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
          visible={visible}
        />
        <NavComp
          title="Contact"
          lnk="mailto:mob.earman.art@gmail.com"
          t
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
          visible={visible}
        />
      </ul>
    </nav>
  );
}
