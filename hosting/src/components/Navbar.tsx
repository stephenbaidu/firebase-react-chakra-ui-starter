import { Box, BoxProps, chakra, Flex, useColorModeValue } from '@chakra-ui/react'

export const Navbar = ({
    children,
    height = "4.5rem",
    ...rest
}: BoxProps) => {
    const bg = useColorModeValue("whiteAlpha.800", "gray.800")
    return (
        <Box {...rest}>
            <chakra.header
                pos="fixed"
                top="0"
                zIndex="1"
                bg={bg}
                left="0"
                right="0"
                px="1rem"
                borderBottomWidth="1px"
                width="full"
                style={{ backdropFilter: "blur(4px)" }}
            >
                <chakra.div height={height} maxW="100%">
                    <Flex w="100%" h="100%" align="center" justify="space-between">
                        {children}
                    </Flex>
                </chakra.div>
            </chakra.header>
        </Box>
    )
}
