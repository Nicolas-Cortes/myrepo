import { Icon, IconProps, Label, labelProps } from '@myrepo/components';
import './styles.css';

interface ListIconProps {
    iconProps: IconProps;
    labelProps: labelProps;
    children: string;
}

export const ListIcon = (props: ListIconProps) => {

    return (
        <div className='render-list'>
            <Icon {...props.iconProps} />
            <Label {...props?.labelProps} />
        </div>
    )
}