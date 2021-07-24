import { Box, BoxProps } from '@chakra-ui/react'

export const Main = (props: BoxProps) => {
    return (
        <Box as="main" px={4} {...props} />
    )
}
