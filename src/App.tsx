import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { LanguageProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="w-screen h-screen flex flex-row text-text">
          <SideMenu />
          <div className="w-full flex flex-col h-full items-center bg-background">
            <Header />
            <div className="p-6 h-screen">
              <Routes />
            </div>
          </div>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
