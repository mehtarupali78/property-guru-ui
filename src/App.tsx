import "./App.css";
import Routers from "./routes/Routes";
import { ChatProvider } from "./components/ProductContext";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ChatProvider>
          <Routers />
        </ChatProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
