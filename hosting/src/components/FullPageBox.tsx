import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { useWindowDimensions } from '../hooks'

interface Props {
    children: ReactNode
}

export const FullPageBox = ({ children }: Props) => {
    const { height, width } = useWindowDimensions()
    return (
        <Box height={`${height}px`} width={`${width}px`}>
            {children}
        </Box>
    )
}
