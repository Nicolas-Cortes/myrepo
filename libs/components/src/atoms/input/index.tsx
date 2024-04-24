import classNames = require('classnames');
import './styles.css';

export interface InputProps {
    type: 'text';
    style?: React.CSSProperties;
    isOutlined?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange, style, isOutlined }: InputProps) => {
    return (
        <input
            className={classNames('input', { isOutlined: isOutlined })}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={style}
        />
    );
}