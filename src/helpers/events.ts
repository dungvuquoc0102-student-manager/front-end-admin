export const sendEvent = <T>(
  eventName: keyof HTMLElementEventMap | string,
  data: T,
  context = document
) => {
  context.dispatchEvent(new CustomEvent(eventName, { detail: data }));
};

export const listenEvent = (
  eventName: keyof HTMLElementEventMap | string,
  handler: (detail: any) => void,
  context = document
) => {
  context.addEventListener(eventName, handler);
  return () => context.removeEventListener(eventName, handler);
};
