import './styles.css';

export interface ViewProps {
    children: React.ReactNode;
}

export const FullView = ({ children }: ViewProps) => {

    return (
        <div className='full-view'>{children}</div>
    )
}

export const LayoutView = ({ children }: ViewProps) => {

    return (
        <div className='layout-view'>{children}</div>
    )
}

export const ScrollView = ({ children }: ViewProps) => {

    return (
        <div className='scroll-view'>{children}</div>
    )
}