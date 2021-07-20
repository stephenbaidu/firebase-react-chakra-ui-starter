import { Box, Image } from '@chakra-ui/react'
import background from "./../background.png"

export const BrandingPane = () => {
    return (
        <Box height="100%">
            <Image
                src={background}
                height="120%"
            />
        </Box>
    )
}
