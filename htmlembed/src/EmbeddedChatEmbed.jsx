import React from 'react'
import ReactDOM from 'react-dom/client'
import { RCComponent } from 'embeddedchat';

const EmbeddedChatEmbed = {
	start(config){
		ReactDOM.createRoot(document.currentScript.parentNode.querySelector('.embeddedchat')).render(
			<React.StrictMode>
				<RCComponent {...config} />
			</React.StrictMode>,
		)
	}
}
export default EmbeddedChatEmbed

window.EmbeddedChatEmbed = EmbeddedChatEmbed;
