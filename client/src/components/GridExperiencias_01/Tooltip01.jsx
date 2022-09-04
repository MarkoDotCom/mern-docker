import * as React from 'react'
import {Tooltip} from '@mui/material';

const Tooltip01 = ({children, ...props}) => {
  return (
	<Tooltip {...props}>
		{children}
	</Tooltip>
  )
}

export default Tooltip01