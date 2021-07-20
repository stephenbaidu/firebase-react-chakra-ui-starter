import React from 'react'
import { Divider, Flex, Text } from '@chakra-ui/react'

type Props = {
  text: string
}

export const TextDivider = ({ text }: Props) => {
  return (
    <Flex alignItems="center">
      <Divider />
      <Text
        mx={2}
        color="gray.400"
        textTransform="lowercase"
        fontStyle="italic"
        fontWeight="bold"
      >
        {text}
      </Text>
      <Divider />
    </Flex>
  )
}
