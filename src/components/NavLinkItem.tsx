import { Button } from "@chakra-ui/react"
import { ReactElement } from "react"
import { NavLink } from "react-router-dom"

interface Props {
    link: string,
    icon?: ReactElement | undefined,
    title: string
}

function NavLinkItem({ title, icon, link }: Props) {
    return (
        <NavLink to={link}>
            {({ isActive }) => (<Button w="full" mb={5} rightIcon={icon} variant={isActive ? "solid" : "outline"} colorScheme='gray'>
                {title}
            </Button>)}
        </NavLink>
    )
}

export default NavLinkItem