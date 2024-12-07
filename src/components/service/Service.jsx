import cls from "./Service.module.scss";
import { ReactComponent as SVG1 } from "../../assets/icons/service-icon1.svg";
import { ReactComponent as SVG2 } from "../../assets/icons/service-icon2.svg";
import { ReactComponent as SVG4 } from "../../assets/icons/service-icon3.svg";
import { ReactComponent as SVG3 } from "../../assets/icons/service-icon4.svg";

export const Service = ({ text }) => {
  return (
    <div className={cls.service}>
      <div className={cls.serviceBlock}>
        <SVG1 />
        <p className={cls.service__text}>{text[0]}</p>
      </div>
      <div className={cls.serviceBlock}>
        <SVG2 />

        <p className={cls.service__text}>{text[1]}</p>
      </div>
      <div className={cls.serviceBlock}>
        <SVG3 />

        <p className={cls.service__text}>{text[2]}</p>
      </div>
      <div className={cls.serviceBlock}>
        <SVG4 />

        <p className={cls.service__text}>{text[3]}</p>
      </div>
    </div>
  );
};
