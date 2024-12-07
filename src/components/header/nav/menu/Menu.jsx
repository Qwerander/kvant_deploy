import { NavLink } from 'react-router-dom';
import cls from './menu.module.scss';

export const Menu = () => {
  return (
    <nav className={cls.menu}>
      <NavLink to='/buch'>Бухгалтерские услуги</NavLink>
      <NavLink to='/jur'>Юридические услуги</NavLink>
      <NavLink to='/about'>О компании</NavLink>
      <NavLink to='/contacts'>Контакты</NavLink>
      {/* <NavLink to='/'>Обучение</NavLink>
      <NavLink to='/'>О&nbsp;компании</NavLink> */}
    </nav>
  );
};
