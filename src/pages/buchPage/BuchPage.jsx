import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { Layout } from "../../shared/layout/Layout";
import cls from "./BuchPage.module.scss";
import homeImg from "../../assets/img/buch-img.svg";
import { Service } from "../../components/service/Service";
import { Usluga } from "../../components/usluga/Usluga";
import { BuchServices } from "../../components/buchServices/BuchServices";
import { HowWork } from "../../components/howWork/HowWork";

export const BuchPage = ({ toggleIsOpenForm }) => {
  return (
    <>
      <Header />
      <Layout>
        <div className={cls.BuchPage}>
          <Intro
            title={"Бухгалтерские услуги"}
            text={
              "Корректно рассчитаем и вовремя оплатим за вас налоги. Без рисков, просрочек и штрафов"
            }
            imageSrc={homeImg}
            buttonText={"Заказать консультацию"}
            buttonOnClick={() => {
              toggleIsOpenForm(true);
            }}
          />
          <div className={cls.BuchPage__service}>
            <Service
              text={[
                "Правильно рассчитываем налоги и соблюдаем сроки сдачи отчетности",
                "Даём гарантии и несём ответственность за результат",
                "Вовремя предупреждаем об изменениях в налоговом законодательстве",
                "Помогаем решить возникающие проблемы",
              ]}
            />
          </div>
          <BuchServices toggleIsOpenForm={toggleIsOpenForm}/>
          <HowWork />
        </div>
      </Layout>
    </>
  );
};
