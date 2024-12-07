import cls from './Title.module.scss';

export const Title = ({ title, Tag = 'h1' }) => {
    return (
        <div className={cls.titleWrapper}>
            <Tag>{title}</Tag>
        </div>
    );
};
