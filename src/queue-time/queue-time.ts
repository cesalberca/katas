export const queueTime = (customers: number[], machines: number) => {
  return Math.max(
    ...customers.reduce((queue, customer) => {
      const index = queue.indexOf(Math.min(...queue));
      queue[index] = Number(queue[index] + customer);
      return queue;
    }, new Array(machines).fill(0))
  );
};
