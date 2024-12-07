import cls from './ProductsCard.module.scss';

export const ProductsCard = ({ value, topText, bottomText }) => {

    return (
        <div className={cls.products__card}>
            <div className={cls.products__card__top}>
                <span>{value}</span>
                <p className={cls.text}>{topText}</p>
            </div>
            <div className={cls.products__card__bottom}>
                <p className={cls.text}>{bottomText}</p>
            </div>
        </div>
    );
};
