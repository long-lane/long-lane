import "./App.css";
import { MainRoutes } from "./routes/MainRoutes";
import { rudderInitialize } from "./helpers/Rudderstack";

function App() {
  rudderInitialize();
  return <MainRoutes />;
}

export default App;
