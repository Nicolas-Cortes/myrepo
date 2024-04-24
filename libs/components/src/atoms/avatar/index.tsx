import classNames from 'classnames';
import './styles.css';

interface AvatarProps {
    size: 'small' | 'medium' | 'large';
    src: string;
    alt?: string;
}

export const Avatar = ({ src, size, alt }: AvatarProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={classNames('avatar', {
                [`avatar-${size}`]: size,
            })}
        />
    );
};