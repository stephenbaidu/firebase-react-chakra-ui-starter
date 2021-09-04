import { Flex } from "@chakra-ui/react"
import {
    ColorModeSwitcher,
    HeaderNavLink,
    Logo,
    Navbar,
    ProfileAvatar
} from '.';
import { signOut, useSession } from '../auth'

export const DefaultNavbar = () => {
    const user = useSession();
    const imgSrc = user?.photoURL || undefined

    return (
        <Navbar>
            <Flex align="center" ml={-3}>
                <HeaderNavLink href="/" aria-label="Firebase React Chakra UI Starter, Back to homepage">
                    <Logo height={30} />
                </HeaderNavLink>
            </Flex>

            <Flex maxW="720px" align="right" color="gray.400">
                <ColorModeSwitcher />
                <ProfileAvatar imgSrc={imgSrc} onLogout={signOut} />
            </Flex>
        </Navbar>
    )
}
