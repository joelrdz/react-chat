import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="2f730b9f-05d2-4aea-b0a3-8357bfb064ca"
      userName="blackwidow"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;