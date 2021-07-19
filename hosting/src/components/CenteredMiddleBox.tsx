import { ReactNode } from 'react'
import { Box, Center, BoxProps, Spacer, VStack } from '@chakra-ui/react'
import { FullPageBox } from './FullPageBox'

interface Props extends BoxProps {
    children: ReactNode
}

export const CenteredMiddleBox = ({ children, ...boxProps }: Props) => {
    return (
        <FullPageBox {...boxProps}>
            <VStack height="full">
                <Spacer />
                <Center>
                    <Box>
                        {children}
                    </Box>
                </Center>
                <Spacer />
            </VStack>
        </FullPageBox>
    )
}
