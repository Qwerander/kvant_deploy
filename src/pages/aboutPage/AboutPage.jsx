import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { Layout } from "../../shared/layout/Layout";
import cls from "./AboutPage.module.scss";
import homeImg from "../../assets/img/home-img.jpg";

export const AboutPage = ({toggleIsOpenForm}) => {
  return (
    <>
      <Header />
      <Layout>
        <div className={cls.AboutPage}>
          <Intro
            title={"Бухгалтерские и юридические услуги"}
            text={
              "Мы работаем с 2010 года более с чем 350 предпринимателями и знаем как вести налоговый и бухгалтерский учет, так чтобы предприниматель был спокоен."
            }
            imageSrc={homeImg}
            buttonText={"Заказать консультацию"}
            buttonOnClick={() => {toggleIsOpenForm(true)}}
          />
        </div>
      </Layout>
    </>
  );
};
