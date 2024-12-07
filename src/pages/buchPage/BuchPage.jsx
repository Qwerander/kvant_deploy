import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { Layout } from "../../shared/layout/Layout";
import cls from "./BuchPage.module.scss";
import homeImg from "../../assets/img/buch-img.svg";
import { Service } from "../../components/service/Service";
import { Usluga } from "../../components/usluga/Usluga";

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
          <div className={cls.BuchPage__service}>
            <Usluga
              title="Аутсорсинг бухгалтерии"
              description="Нужен надежный подрядчик на аутсорсинг бухгалтерии? Вы его нашли!"
              price={6500}
              buttonText="Заказать"
              onOrderClick={() => {toggleIsOpenForm(true)}}
            />
            <Usluga
              title="Бухгалтерские услуги для ООО"
              description="Бухгалтерские услуги для ООО. Любая деятельность, возьмем бухучет на себя."
              price={6500}
              buttonText="Заказать"
              onOrderClick={() => {toggleIsOpenForm(true)}}
            />
            <Usluga
              title="Бухгалтерские услуги для ИП"
              description="Маленький бизнес — большая ответственность. Заберем на себя бухгалтерскую ее часть."
              features={[
                'Сведем к минимуму риск блокировки р/с',
                'Ответим на все ваши вопросы',
                'Отчеты будут сдаваться вовремя — вам не нужно будет за этим следить'
              ]}
              price={6500}
              buttonText="Заказать"
              onOrderClick={() => {toggleIsOpenForm(true)}}
              />
            <Usluga
              title="Возмещение НДС"
              features={[
                'Помогаем вернуть НДС',
                'Рассказываем, кто может вернуть НДС и в каком случае',
                'Помогаем на всех этапах'
              ]}
              price={20000}
              buttonText="Заказать"
              onOrderClick={() => {toggleIsOpenForm(true)}}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};
