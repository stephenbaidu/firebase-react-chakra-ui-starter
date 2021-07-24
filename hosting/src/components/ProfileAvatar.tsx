import React from 'react'
import {
	Box,
	Button,
	Avatar,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"

interface Props {
	imgSrc?: string,
	onLogout: () => void,
}

export const ProfileAvatar = ({ imgSrc, onLogout }: Props) => {
	return (
		<Box mr={0}>
			<Menu>
				<MenuButton bgColor="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
					{
						imgSrc
							? <Avatar size="xs" src={imgSrc} />
							: <Avatar size="xs" />
					}
				</MenuButton>
				<MenuList>
					<MenuItem onClick={onLogout}>Logout</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	)
}
