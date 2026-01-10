import type { ThemeObj } from "../../types";
import Button from "../basic/Button";

export default function ThemeMenu({
  cb,
  themes,
}: {
  cb: (theme: string) => void;
  themes: ThemeObj[];
}) {
  return (
    <div className="theme-box">
      {themes.map((th: ThemeObj) => {
        return (
          <Button
            className="theme-box__button theme-box__button--white"
            color={th.color}
            round={true}
            event={() => cb(th.theme)}
          ></Button>
        );
      })}
    </div>
  );
}
