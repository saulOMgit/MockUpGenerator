import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import SignInPage from "./components/SingInPage";
import Header from "./components/Header";
import Panel from "./components/Panel";
import "./App.css"
const App = () => {
  return (
    <>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Header/>
        <Panel/>
      </SignedIn>
    </>
  );
}

export default App