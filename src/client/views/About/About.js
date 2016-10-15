import React from 'react'
import Flexbox from 'react-material-flexbox'

import BackgroundSwitcher from 'modules/BackgroundSwitcher/BackgroundSwitcherContainer'
import Svg from 'modules/Svg/Svg'

// Assets 
import Logo from 'assets/logo.svg'

// Theme
import theme from 'views/About/About.scss'

const About = (props) => (
	<Flexbox className={ theme.about } layout='column' align='center center'>
		<Svg className={ theme.logo } source={ Logo } />
		<h3>What the Flux!</h3>
		<p>React / Redux starter kit with a focus on a modular file structure for self contained functionality.</p>
		<BackgroundSwitcher />
	</Flexbox>
)

export default About