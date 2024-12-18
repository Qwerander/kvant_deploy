import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { Layout } from "../../shared/layout/Layout";
import cls from "./JurPage.module.scss";
import homeImg from "../../assets/img/jur-img.svg";
import { Service } from "../../components/service/Service";
import { Usluga } from "../../components/usluga/Usluga";
import { JurServices } from "../../components/jurServices/JurServices";
import { HowWork } from "../../components/howWork/HowWork";

export const JurPage = ({ toggleIsOpenForm }) => {
  return (
    <>
      <Header />
      <Layout>
        <div className={cls.JurPage}>
          <Intro
            title={"Юридические услуги"}
            text={
              "Решаем сложные коммерческие споры между партнерами и с государством — цена рассчитывается индивидуально"
            }
            imageSrc={homeImg}
            buttonText={"Заказать консультацию"}
            buttonOnClick={() => {
              toggleIsOpenForm(true);
            }}
          />
          <Service
            text={[
              "Решаем, казалось бы, безнадежные дела в пользу наших клиентов",
              "Сохраняем стратегические объекты для бизнеса",
              "Урегулируем разногласия между партнерами",
              "Экономим клиентам миллионы рублей",
            ]}
          />
          <JurServices toggleIsOpenForm={toggleIsOpenForm} />
           <HowWork />
        </div>
      </Layout>
    </>
  );
};
