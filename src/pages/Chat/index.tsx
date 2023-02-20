import { Component, For } from "solid-js";

import RequiresAuth from "../../shared/RequiresAuth";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import Message from "./components/Message";
import { mockMessages } from "./mocks";

import "./index.css";

const ChatPage: Component = () => (
  <RequiresAuth>
    <div
      // Apparently there's a well-known, wontfix browser bug where if you
      // justify elements to flex-end, vertical scrolling doesn't work. To work
      // around that, we build this layout using a reverse column flex direction
      // lol
      class="flex h-full flex-col-reverse"
    >
      <InputBar />
      <div class="flex flex-col-reverse overflow-y-scroll">
        <div class="flex flex-col gap-6 pt-4 pb-8">
          <For each={mockMessages}>{(message) => <Message {...message} />}</For>
        </div>
        <Header participants={["2B", "Yuzuki Choco"]} />
      </div>
    </div>
  </RequiresAuth>
);

export default ChatPage;
