import classNames from 'classnames';
import './styles.css';

export interface labelProps {
    children: React.ReactNode;
    size?: 'xs' | 's' | 'm' | 'l';
    style?: React.CSSProperties;
    upperCase?: boolean;
    isBold?: boolean;
}

export const Label = ({ children, size = 'm', upperCase, isBold, style }: labelProps) => {
    return (
        <p
            className={classNames({ [`size-${size}`]: size, upperCase: upperCase, isBold: isBold })}
            style={style}
        >
            {children}
        </p>
    )
}