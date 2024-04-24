import { Label } from '../label';
import './styles.css';

export interface InputProps {
    type: 'checkbox' | 'radio';
    children: string;
    style?: React.CSSProperties;
    onChange?: () => void;
}

export const CheckBox = ({ type, children, onChange, style }: InputProps) => {
    return (
        <div className='container'>
            <input
                className='checkbox'
                type={type}
                style={style}
                onChange={onChange} />
            <Label size='m'>{children}</Label>
        </div>
    );
}