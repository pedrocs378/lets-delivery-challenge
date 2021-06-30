import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'

export function Routes() {

	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/favorites" component={Favorites} />
		</Switch>
	)
}