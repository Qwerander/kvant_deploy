import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { Layout } from "../../shared/layout/Layout";
import cls from "./JurPage.module.scss";
import homeImg from "../../assets/img/jur-img.svg";
import { Service } from "../../components/service/Service";
import { Usluga } from "../../components/usluga/Usluga";

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
          <div className={cls.JurPage__service}>
            <Usluga
              title="Ликвидация ООО"
              description="Делаем ликвидацию ООО любой сложности — от простых нулевок до проблемных фирм."
              price={20000}
              buttonText="Заказать"
              onOrderClick={() => {
                toggleIsOpenForm(true);
              }}
            />
            <Usluga
              title="Регистрация изменений в учредительные документы ЮЛ и внесение сведений в ЕГРЮЛ"
              description="Готовим документы, которые нужны для регистрации изменений в учредительные документы и для других типов документов."
              price={3000}
              buttonText="Заказать"
              onOrderClick={() => {
                toggleIsOpenForm(true);
              }}
            />
            <Usluga
              title="Регистрация ИП"
              description="Поможем зарегистрировать ИП — подготовим документы и подскажем, какую систему налогообложения выбрать."
              price={3000}
              buttonText="Заказать"
              onOrderClick={() => {
                toggleIsOpenForm(true);
              }}
            />
            <Usluga
              title="Регистрация ООО"
              description="Поможем зарегистрировать ООО — подготовим документы и подскажем, какую систему налогообложения выбрать."
              features={[
                "Регистрируем за 3 дня",
                "Готовим пакет документов",
                "Подбираем ОКВЭДЫ",
                "Отвечаем на все вопросы",
              ]}
              price={5000}
              buttonText="Заказать"
              onOrderClick={() => {
                toggleIsOpenForm(true);
              }}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};
