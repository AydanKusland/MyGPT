import ChatContainer from './components/ChatContainer'
import Sidebar from './components/Sidebar'

export default function App() {
	return (
		<div className='topLevelContainer'>
			<Sidebar />
			<ChatContainer />
		</div>
	)
}
