import cls from './education.module.scss';
import eduImage1 from '../../../img/homePage/edu1.jpg';
import eduImage2 from '../../../img/homePage/edu2.jpg';
import eduImage3 from '../../../img/homePage/edu3.jpg';
import eduImage4 from '../../../img/homePage/edu4.jpg';

export const Education = () => {
    return (
        <div className={cls.education}>
            <h2 className={cls.education__title}>Обучение и торговые советники нашей компании.</h2>
            <div className={cls.education__wrapper}>
                <div className={cls.education__block}>
                    <p className={cls.education__text}>Telegram канал</p>
                    <img className={cls.education__img} src={eduImage1} alt="" />
                </div>
                <div className={cls.education__block}>
                    <p className={cls.education__text}>Робот NtRangerGrid</p>
                    <img className={cls.education__img} src={eduImage2} alt="" />
                </div>
                <div className={cls.education__block}>
                    <p className={cls.education__text}>Робот ZzPointerGrid</p>
                    <img className={cls.education__img} src={eduImage3} alt="" />
                </div>
                <div className={cls.education__block}>
                    <p className={cls.education__text}>Робот Diversifier</p>
                    <img className={cls.education__img} src={eduImage4} alt="" />
                </div>
            </div>
        </div>
    );
};
