import { ReactElement } from 'react'
import {
    useColorMode,
    useColorModeValue,
    Box,
    BoxProps,
    IconButton,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa"

export const ColorModeSwitcher = ({
    children,
    ...props
}: BoxProps): ReactElement => {
    const { toggleColorMode } = useColorMode()
    const otherMode = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

    return (
        <Box {...props}>
            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${otherMode} mode`}
                variant="ghost"
                color="current"
                ml="3"
                onClick={toggleColorMode}
                icon={<SwitchIcon />}
            />
        </Box>
    )
}
