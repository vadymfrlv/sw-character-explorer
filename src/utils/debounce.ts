export function debounce<A = unknown, R = void>(
  fn: (args: A) => R,
  wait: number
): [(args: A) => Promise<R>, () => void] {
  let timer: ReturnType<typeof setTimeout>;

  const debouncedFunc = (args: A): Promise<R> =>
    new Promise(resolve => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        resolve(fn(args));
      }, wait);
    });

  const teardown = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  return [debouncedFunc, teardown];
}
