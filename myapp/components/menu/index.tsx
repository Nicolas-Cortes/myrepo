import { Avatar, Flicker, Label, ListIcon } from "@myrepo/components"
import Link from "next/link"
import { menuItems } from "./menuList";
import { IMG } from "./../../public/shared/Urls";

export default function Menu() {

    return (
        <div>
            <div className="menu-avatar">
                <Avatar src={IMG} alt='Profile Image' size='large' />
                <Label size="l" isBold={true}>Hello, Nicolas</Label>
            </div>

            {menuItems.map((item, index) => (
                <Flicker key={index}>
                    <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListIcon
                            key={index}
                            iconProps={{ name: item.icon }}
                            labelProps={{ children: item.label, size: 'm', isBold: true }}
                        />
                    </Link>
                </Flicker>
            ))}
        </div>

    )
}