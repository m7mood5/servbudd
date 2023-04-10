import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";

const projectId = process.env.IDPROJECT_ID;

const username = "Mahmou";

function App() {
    const chatProps = useMultiChatLogic(projectId, username);

    return (
        <>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow  {...chatProps} style={{ height: '70vh' }} />
        </>
    );
}

export default App;