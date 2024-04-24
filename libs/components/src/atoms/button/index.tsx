import classNames from 'classnames';
import './styles.css';

export interface ButtonProps {
    type: 'primary' | 'secondary';
    children: React.ReactNode;
    style?: React.CSSProperties;
    uppercase?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({ children, type, uppercase, onClick, disabled, style }: ButtonProps) => {
    return (
        <button
            className={classNames('button', { [`type-${type}`]: type, uppercase: uppercase })}
            disabled={disabled}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}