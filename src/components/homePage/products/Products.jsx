import { Title } from '../../../shared/title/Title';
import cls from './Products.module.scss';
import teamImg from '../../../img/homePage/products_team.png';
import { SvgIcon1, Qwer, SvgIcon3, SvgIcon4 } from '../../../img/homePage';
import { ProductsCard } from './productsCard/ProductsCard';

export const Products = () => {
    const cards = [
        {
            id: 1,
            value: '4',
            svgIcon: <SvgIcon1 />,
            topText: (
                <>
                    направления <br /> работы
                </>
            ),
            bottomText:
                'Мы концентрируемся на разработке комплексных решений для трейдеров, инвесторов, управляющих и партнеров',
        },
        {
            id: 2,
            value: '50%',
            svgIcon: <Qwer />,
            topText: (
                <>
                    {' '}
                    средняя <br /> доходность
                </>
            ),
            bottomText:
                'Средний показатель доходности активных инвесторов и трейдеров по всем продуктам Квант Шоп за прошедший год',
        },
        {
            id: 3,
            value: '2.5$',
            svgIcon: <SvgIcon3 />,
            topText: <>миллиона</>,
            bottomText:
                'Совокупный портфель клиентов Квант Шоп по состоянию на декабрь 2021 года',
        },
        {
            id: 4,
            value: '3000$',
            svgIcon: <SvgIcon4 />,
            topText: <></>,
            bottomText: 'Средний размер инвестиций в продукты Квант Шоп, исключая VIP-сегмент',
        },
    ];

    return (
        <div className={cls.products}>
            <Title title={'Найдем продукт для любого случая'} Tag={'h2'} />
            <div className={cls.products__content}>
                <div className={cls.products__left}>
                    <img className={cls.products__img} src={teamImg} alt="Наша команда" />
                    <p className={cls.products__descr}>
                        Компания Квант Шоп — передовой разработчик стратегий и решений для
                        трейдеров и инвесторов с любым уровнем подготовки
                    </p>
                </div>
                <div className={cls.products__right}>
                    {cards.map((card) => (
                        <ProductsCard
                            key={card.id}
                            value={card.value}
                            topText={card.topText}
                            bottomText={card.bottomText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
