import cardStyle from './styles.module.scss';

interface ICard {
  title: React.ReactNode;
  body: React.ReactNode | string;
  className?: string;
}

export default function Card({ title, body, className }: ICard): React.ReactElement {
  return (
    <div className={cardStyle.cardBody}>
      <p className={cardStyle.title}>{title}</p>
      <div className={`${cardStyle.body} ${className}`}>{body}</div>
    </div>
  );
}
