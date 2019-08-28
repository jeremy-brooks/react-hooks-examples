import { unmountComponentAtNode } from "react-dom";

export const setupTestContainer = () => {
  let container;
  container = document.createElement("div");
  document.body.appendChild(container);
  return container;
};

export const teardownTestContainer = container => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
};
