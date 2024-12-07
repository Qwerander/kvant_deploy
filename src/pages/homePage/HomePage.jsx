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
import homeImg from "../../assets/img/home-img.jpg"

export const HomePage = ({toggleIsOpenForm}) => {
  return (
    <>
      {/* <HeaderVideo /> */}
      <Header />
      <Layout>
        <div className={cls.HomePage}>
          <Intro
            title={"Бухгалтерские и юридические услуги"}
            text={
              "Мы работаем с 2010 года более с чем 350 предпринимателями и знаем как вести налоговый и бухгалтерский учет, так чтобы предприниматель был спокоен."
            }
            imageSrc={homeImg}
            buttonText={"Заказать консультацию"}
            buttonOnClick={() => {toggleIsOpenForm(true)}}
          />
          {/* <Products /> */}
          {/* <SliderComponent /> */}
          {/* <Education />
                    <Services /> */}
        </div>
      </Layout>
    </>
  );
};
