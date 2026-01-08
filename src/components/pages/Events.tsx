import CSSTransitionCom from "../core/CSSTransitionCom";

export default function Event({ flag }: { flag: boolean }) {
  return (
    <CSSTransitionCom show={flag}>
      <div></div>
    </CSSTransitionCom>
  );
}
