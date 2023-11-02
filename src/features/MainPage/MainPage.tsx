import { FunctionComponent } from "react";
import MainPage__ from "./MainPage.module.css";
import { Messages } from "@/features/Messages/Messages";

const MainPage: FunctionComponent = () => (
  <main className={MainPage__.Root}>
    <h1>Messages ✉️</h1>
    <p>This app is made for testing.</p>
    <p>
      Source code:{" "}
      <a href="https://github.com/800147/messages" target="_blank">
        https://github.com/800147/messages
      </a>
    </p>
    <Messages />
  </main>
);

export default MainPage;
