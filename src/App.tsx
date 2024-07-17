import dataProvider from '@pankod/refine-simple-rest'
import { Refine } from '@refinedev/core'

import { PostEdit } from './form'

const API_URL = 'https://api.fake-rest.refine.dev'

const App: React.FC = () => {
	return (
		<Refine dataProvider={dataProvider(API_URL)}>
			<PostEdit />
		</Refine>
	)
}

export default App
