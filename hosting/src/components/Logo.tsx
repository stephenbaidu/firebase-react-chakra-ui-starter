import { Box, Image, useColorModeValue } from '@chakra-ui/react'
import logoWhite from './../logo.svg'
import logoBlack from './../logo.svg'

type Props = {
    height?: number
}

export const Logo = ({ height = 30 }: Props) => {
    const logo = useColorModeValue(logoBlack, logoWhite)

    return (
        <Box flexShrink={0}>
            <Image
                height={height}
                src={logo}
                alt="Logo"
            />
        </Box>
    )
}
