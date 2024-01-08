import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Gopal",
      "botConversationDescription": "I am designed to assist you!",
      "botId": "d1f98ed5-aee2-4e42-856a-1175e5f4a910",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "d1f98ed5-aee2-4e42-856a-1175e5f4a910",
      "webhookId": "b49b7e8c-a8aa-4a07-8cc0-ecfc6ddf2bf6",
      "lazySocket": true,
      "themeName": "prism",
      "botName": "Gopal",
      "avatarUrl": "https://cdn3d.iconscout.com/3d/free/preview/free-curly-hair-man-9606398-7766943.png?f=webp&h=700",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/8924d356-73c9-4f12-b2ba-13ce04ab1350/v14968/style.css",
      "frontendVersion": "v1",
      "useSessionStorage": true,
      "showBotInfoPage": true,
      "theme": "prism",
      "themeColor": "#2563eb"
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot