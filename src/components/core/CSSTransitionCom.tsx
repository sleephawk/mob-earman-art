import { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

type CSSTransitionComProps = {
  show: boolean; // controls enter/exit
  children: ReactNode | ReactNode[]; // content to render
  timeout?: number; // optional, default 800ms
  classN?: string;
};

export default function CSSTransitionCom({
  show,
  children,
  timeout = 800,
  classN = "fade-out",
}: CSSTransitionComProps) {
  // Internal ref for CSSTransition to target
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition
        key={show}
        nodeRef={nodeRef}
        classNames={classN}
        timeout={timeout}
        unmountOnExit
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
}
