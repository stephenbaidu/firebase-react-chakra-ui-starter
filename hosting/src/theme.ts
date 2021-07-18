import { ColorModeOptions, extendTheme } from "@chakra-ui/react"

const config: ColorModeOptions = {
    useSystemColorMode: false,
    initialColorMode: "light",
}

export default extendTheme({ config })
