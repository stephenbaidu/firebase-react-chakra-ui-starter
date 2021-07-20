import React from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const PasswordInput = (props: InputProps) => {
  const [show, setShow] = React.useState(false)
  const toggleShow = () => setShow(!show)

  return (
    <InputGroup {...props}>
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        {...props}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          aria-label="Show password"
          onClick={toggleShow}
          size="sm"
          icon={show ? <FaEyeSlash /> : <FaEye />}
        />
      </InputRightElement>
    </InputGroup>
  )
}
