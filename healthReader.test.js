const { healthMetricsCounter } = require('./healthReader');

test('counts health entries correctly', async () => {
  const total = await healthMetricsCounter('./data/health.json');
  expect(total).toBe(3);
});
