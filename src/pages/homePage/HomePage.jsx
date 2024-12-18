import { Header } from "../../components/header/Header";
// import { HeaderVideo } from '../../components/headerVideo/HeaderVideo';
import { Education } from "../../components/homePage/education/Education";
// import { Hero } from '../../components/homePage/hero/Hero';
// import { Products } from '../../components/homePage/products/Products';
import { Services } from "../../components/homePage/services/Services";
import { Intro } from "../../components/intro/Intro";
// import SliderComponent from '../../components/homePage/slider/Slider';
import { Layout } from "../../shared/layout/Layout";
import cls from "./HomePage.module.scss";
import homeImg from "../../assets/img/home-img.jpg";
import { Service } from "../../components/service/Service";
import { Title } from "../../shared/title/Title";
import { useState } from "react";
import { ToggleSwitcher } from "../../shared/toggleSwitcher/ToggleSwitcher";
import { BuchServices } from "../../components/buchServices/BuchServices";
import { JurServices } from "../../components/jurServices/JurServices";
import { Benefits } from "../../components/benefits/Benefits";
import { HowWork } from "../../components/howWork/HowWork";
import { Form } from "../../components/form/Form";

export const HomePage = ({ toggleIsOpenForm }) => {
  const [activeSwitch, toggleActiveSwitch] = useState("left");
  return (
    <>
      {/* <HeaderVideo /> */}
      <Header />
      <Layout>
        <div className={cls.HomePage}>
          <Intro
            title={"Бухгалтерские и юридические услуги"}
            text={
              "Мы работаем с 2010 года более с чем 350 предпринимателями и знаем как вести налоговый и бухгалтерский учет, так чтобы предприниматель был спокоен."
            }
            imageSrc={homeImg}
            buttonText={"Заказать консультацию"}
            buttonOnClick={() => {
              toggleIsOpenForm(true);
            }}
          />
          <div className={cls.HomePage__service}>
            <Service
              text={[
                "Правильно рассчитываем налоги и соблюдаем сроки сдачи отчетности",
                "Даём гарантии и несём ответственность за результат",
                "Вовремя предупреждаем об изменениях в налоговом законодательстве",
                "Помогаем решить возникающие проблемы",
              ]}
            />
          </div>
          <Title Tag={"h2"} title={"Возьмем на себя"} />
          <ToggleSwitcher
            active={activeSwitch}
            toggle={toggleActiveSwitch}
            leftTitle={"Бухгалтерские услуги"}
            rightTitle={"Юридические услуги"}
          />
          {activeSwitch === "left" && (
            <BuchServices toggleIsOpenForm={toggleIsOpenForm} />
          )}
          {activeSwitch === "right" && (
            <JurServices toggleIsOpenForm={toggleIsOpenForm} />
          )}

          <Benefits />
          <HowWork />
          <div className={cls.HomePage__formWrapper}>

             <Form />
          </div>
        </div>
      </Layout>
    </>
  );
};
