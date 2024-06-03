export default function runMultipleFunctionsWithInitDelay(delay, ...functies) {
  setTimeout(() => {
    functies.reduce((prom, f) => {
      return prom.then(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              f();
              resolve();
            }, 0);
          })
      );
    }, Promise.resolve());
  }, delay);
}
