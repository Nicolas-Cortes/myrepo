import './styles.css';

export interface SelectProps {
    options: { value: string, label: string }[];
    style?: React.CSSProperties;
}

export const Select = ({ options, style }: SelectProps) => {
    return (
        <select
            className='select'
            style={style}
        >
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    )
}