import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { Layout } from "../../shared/layout/Layout";
import cls from "./AboutPage.module.scss";
import homeImg from "../../assets/img/contacts-img.svg";

export const AboutPage = ({toggleIsOpenForm}) => {
  return (
    <>
      <Header />
      <Layout>
        <div className={cls.AboutPage}>
          <Intro
            title={"О компании"}
            text={
              "Больше 10 лет занимаемся бухгалтерией и налоговой безопасностью наших клиентов и совсем не устали от этого. Любим сложные случаи, любим чистый и упорядоченный учет и и улыбки наших спокойных клиентов. Ценим комфортную коммуникацию, работаем с небольшими компаниями, продавцами на маркетплейсах, IT-компаниями и большими холдингами со сложной структурой."
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
