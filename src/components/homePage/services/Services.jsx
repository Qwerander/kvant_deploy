import cls from './services.module.scss';
import serv1 from '../../../img/homePage/services1.jpg';
import serv2 from '../../../img/homePage/services2.jpg';
import serv3 from '../../../img/homePage/services3.jpg';

export const Services = () => {
    return (
        <div className={cls.services}>
            <div className={cls.services__block}>
                <div className={cls.services__left}>
                    <h3 className={cls.services__title}>Трейдер Александр Смирнов</h3>
                    <p className={cls.services__text}>
                        Практикующий трейдер с 2008 года, в 2016 г. перешел на комбинированную:
                        алгоритмическую и ручную торговлю. Два года опыта работы в крупнейшей проп
                        трейдинговой компании среди стран СНГ 2018-2020 гг. Торговая стратегия
                        основана на разработках ручных и автоматизированных систем форекс с
                        оптимизацией и применением лучших на практике. Огромная база различных
                        качественных экспертов в наличии и возможность индивидуального подбора для
                        клиентов компании. Имеется большой работы с инвесторами из разных стран,
                        проходил обучение у многих преподавателей курсов по инвестированию.
                    </p>
                </div>
                <div className={cls.services__right}>
                    <img src={serv1} alt="" />
                </div>
            </div>
            <div className={cls.services__block}>
                <div className={cls.services__left}>
                    <h3 className={cls.services__title}>
                        Индивидуальное обучение алгоритмической торговле
                    </h3>
                    <ul className={cls.services__list}>
                        <li className={cls.services__item}>
                            oбщeние c oдним из лучшиx пpoфeccиoнaлoв в алготрейдинге
                        </li>
                        <li className={cls.services__item}>
                            доступ к всем советникам компании под личные счета
                        </li>
                        <li className={cls.services__item}>
                            пoлучение необходимых oбучaющих видео занятий сразу
                        </li>
                        <li className={cls.services__item}>
                            личные занятия с трейдером от 1 до 2-х часов каждую неделю
                        </li>
                        <li className={cls.services__item}>
                            cocтaвление инвecтициoнного пopтфeля торговых экспертов
                        </li>
                        <li className={cls.services__item}>
                            доступ к дорогим программам для алготрейдинга
                        </li>
                        <li className={cls.services__item}>
                            получение дорогих и качественных советников с маркета
                        </li>
                        <li className={cls.services__item}>
                            обучение проходит в течении нескольких месяцев
                        </li>
                        <li className={cls.services__item}>
                            дальнейшие консультации после получения всех знаний
                        </li>
                    </ul>
                </div>
                <div className={cls.services__right}>
                    <img src={serv2} alt="" />
                </div>
            </div>
            <div className={cls.services__block}>
                <div className={cls.services__left}>
                    <h3 className={cls.services__title}>
                        Как получить наши торговые эксперты бесплатно?
                    </h3>
                    <p className={cls.services__text}>
                        Для получения бесплатно большинства написанных нами советников (исключение
                        составляют роботы на индивидуальном обучении) необходимо зарегистрироваться
                        у любого брокера - партнера из списка доступных. Список публикуется в
                        описаниях под нашими видео на YouTube и в инструкциях к экспертам. Ссылки на
                        все файлы можно найти в блоке товаров и услуг сайта. В файлах с экспертами
                        находится подробное описание действий для создания торгового партнерского
                        счета. Список брокеров формируется из наиболее надежных и актуальных,
                        которыми я пользуюсь лично на текущее время.
                    </p>
                </div>
                <div className={cls.services__right}>
                    <img src={serv3} alt="" />
                </div>
            </div>
        </div>
    );
};
