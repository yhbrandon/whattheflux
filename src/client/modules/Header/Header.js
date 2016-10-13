// Core
import React from 'react'

// Thirdparty
import { AppBar } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Modules
import Svg from 'modules/Svg/Svg'

// Assets 
import Logo from 'assets/logo.svg'

// Styles
import theme from 'modules/Header/Header.scss'

const Header = (props) => (
	<div className={ theme.appBar } data-oh-hi='header'>
		<AppBar className={ theme.header } flat>
			<Flexbox className={ theme.wrapper } layout='row' flex align='start center'>
				<Svg className={ theme.logo } source={ Logo } />
			</Flexbox>
		</AppBar>
	</div>
)

export default Header