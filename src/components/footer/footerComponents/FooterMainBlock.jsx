import cls from "./footerBlock.module.scss";
import { useResize } from "../../../hooks/useRessize";

export const FooterMainBlock = () => {
  const resize450 = useResize(448);
  return (
    <div className={`${cls.footer__block} ${cls.footer__block_main}`}>
      {!resize450 && (
        <div className={cls.footer__button}>
          {/* <button>Временная кнопка</button> */}
        </div>
      )}
      {/* Логотип */}
      <p className={cls.footer__text}>
        Оказание бухгалтерских и юридических услуг связано с необходимостью
        соблюдения законодательства, финансовых норм и требований. Успех решений
        зависит от множества факторов, включая полноту предоставленной
        информации и изменения в нормативно-правовой базе. Результаты ранее
        оказанных услуг не гарантируют аналогичного результата в будущем.
        Ответственность за принятие окончательных решений лежит на клиенте, даже
        при наличии профессиональных рекомендаций.
      </p>
      {/* <span className={cls.footer__subscribe}>Подпишись на скидки и акции</span> */}
    </div>
  );
};
