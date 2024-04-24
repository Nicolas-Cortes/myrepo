import * as Icons from 'react-icons/io5';
import './styles.css';

export interface IconProps {
    name: IconName;
    size?: 's' | 'm' | 'l' | 'xl' | number | string;
    style?: React.CSSProperties;
}

type IconName = keyof typeof Icons;

enum IconSize {
    s = '0.5rem',
    m = '1rem',
    l = '1.5rem',
    xl = '2rem',
}

export const Icon: React.FC<IconProps> = ({ name, size = 'm', style }) => {
    const IconComponent = Icons[name];

    let sizeToRender = size;

    if (size in IconSize) {
        sizeToRender = IconSize[size as keyof typeof IconSize];
    }

    return (
        <IconComponent
            className='icon'
            size={sizeToRender}
            style={style}
        />
    );
};