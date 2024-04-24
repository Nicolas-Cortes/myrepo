import { Avatar, Flicker, Icon, Input } from '@myrepo/components'
import { IMG } from "./../../public/shared/Urls";

export default function index() {
    return (
        <div className='row space-between'>
            <div className="row">
                <Icon name="IoSearchOutline" size="l" style={{ color: "#757780" }} />
                <Input placeholder='Search...' type={'text'} isOutlined />
            </div>


            <div className="row-icons space-between">
                <Flicker onClick={() => alert('Hello Word')}>
                    <Icon name="IoNotificationsOutline" size="l" />
                </Flicker>
                <Avatar src={IMG} alt='Profile Image' size='small' />
            </div>
        </div>
    )
}