import { ReactComponent as Logo } from '../../../img/logo/logo-light.svg';
import { Title } from '../../../shared/title/Title';
import cls from './Hero.module.scss';

export const Hero = () => {
    return (
        <div className={cls.hero}>
            <div className={cls.hero__content}>
                <div className={cls.hero__left}>
                    <Title title={'Комплексные финтех решения для заработка на финансовых рынках'}/>
                </div>
                <div className={cls.hero__right}>
                    <div className={cls.hero__logo}>
                        <Logo />
                        <span className={cls.hero__info}>Всегда на шаг впереди</span>
                    </div>
                    <div className={cls.hero__descr}>
                        <p className={cls.hero__info}>Создаем инновации в инвестиционной сфере</p>
                        <p className={cls.hero__text}>
                            Разрабатываем торговые стратегии и инвест портфели для безопасного и
                            прибыльного инвестирования в акции, индексы, нефть, золото, валюты и
                            другие финансовые инструменты
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
