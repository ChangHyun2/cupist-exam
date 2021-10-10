export const timer = (ms: number) =>
  new Promise<void>((res, rej) => {
    setTimeout(() => res(), ms);
  });
