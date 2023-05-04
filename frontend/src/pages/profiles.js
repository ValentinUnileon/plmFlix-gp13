import * as React from 'react'
import { Box, Avatar, Icons } from 'grommet';


export default function Profiles() {
    return (
        <Box direction="row"  gap="small">
            <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
            <Avatar background="brand">
                <Icons.UserFemale color="text-strong" />
            </Avatar>
        </Box>
    )
}