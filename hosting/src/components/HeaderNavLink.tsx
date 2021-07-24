import { chakra, useColorModeValue } from "@chakra-ui/react"
import { LinkProps, useRoute } from "wouter"

export const HeaderNavLink = (props: LinkProps) => {
    const href = props.href
    const [isActive] = useRoute(href || "")
    const color = useColorModeValue("gray.600", "whiteAlpha.800")
    const bg = useColorModeValue("gray.100", "whiteAlpha.100")

    return (
        <chakra.a
            aria-current={isActive ? "page" : undefined}
            display="block"
            py="1"
            px="3"
            borderRadius="4px"
            transition="all 0.2s"
            color={color}
            fontWeight="normal"
            _hover={{ bg: bg }}
            _activeLink={{
                fontWeight: "semibold",
                color: "teal.500",
            }}
            {...props}
        />
    )
}
