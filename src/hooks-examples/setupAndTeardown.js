import { unmountComponentAtNode } from "react-dom";

export const setupContainer = () => {
  let container;
  container = document.createElement("div");
  document.body.appendChild(container);
  return container;
};

export const teardownContainer = container => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
};
