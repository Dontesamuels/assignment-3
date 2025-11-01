const { workoutCalculator } = require('./workoutReader');

test('counts workouts and total minutes correctly', async () => {
  const result = await workoutCalculator('./data/workouts.csv');
  expect(result.totalWorkouts).toBe(3);
  expect(result.totalMinutes).toBe(135);
});
