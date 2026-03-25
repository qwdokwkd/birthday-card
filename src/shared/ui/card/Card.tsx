import { buildClassName } from "@/shared/lib";
import "./Card.scss";

interface CardProps {
  className?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  className,
  title,
  subtitle,
  children,
  icon,
}) => {
  return (
    <div
      className={buildClassName("card", className ? [className] : undefined)}
    >
      {!!icon && <div className="card__icon">{icon}</div>}
      <h3 className="card__title">{title}</h3>
      {!!subtitle && <h4 className="card__subtitle">{subtitle}</h4>}
      {children}
    </div>
  );
};

export default Card;
