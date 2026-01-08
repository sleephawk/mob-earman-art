import { ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";

type CSSTransitionComProps = {
  show: boolean; // controls enter/exit
  children: ReactNode | ReactNode[]; // content to render
  timeout?: number; // optional, default 800ms
  classNames?: string;
};

export default function CSSTransitionCom({
  show,
  children,
  timeout = 800,
  classNames = "fade-out",
}: CSSTransitionComProps) {
  // Internal ref for CSSTransition to target
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      classNames={classNames}
      timeout={timeout}
      unmountOnExit
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}
