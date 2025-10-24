export const fetchMockData = (path) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch(`/data/${path}`);
        const data = await res.json();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    }, 500); // simulate latency
  });
};
