import { Avatar, Flicker, Icon, Label } from "@myrepo/components"
const IMG = 'https://avatars.githubusercontent.com/u/35453779?v=4'

export const Header = () => {
    return (
        <header className="row space-between">
            <Label size="large">¡To Do!</Label>
            <div className="row-icons space-between">
                <Flicker onClick={() => alert('Hello Word')}><Icon name="IoNotifications" size="l" /></Flicker>
                <Avatar src={IMG} alt='Imagen de Perfil' size='small' />
            </div>
        </header>
    )
}