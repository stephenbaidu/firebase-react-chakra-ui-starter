import { ReactNode } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { useWindowDimensions } from '../hooks'

interface Props extends BoxProps {
    children: ReactNode
}

export const FullPageBox = ({ children, ...boxProps }: Props) => {
    const { height, width } = useWindowDimensions()
    return (
        <Box height={`${height}px`} width={`${width}px`} {...boxProps}>
            {children}
        </Box>
    )
}
