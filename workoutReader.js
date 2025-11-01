const fs = require('fs');
const csv = require('csv-parser');

async function workoutCalculator(filePath) {
  return new Promise((resolve, reject) => {
    let totalWorkouts = 0;
    let totalMinutes = 0;

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        totalWorkouts++;
        totalMinutes += parseInt(row.minutes);
      })
      .on('end', () => {
        console.log(`Total workouts: ${totalWorkouts}`);
        console.log(`Total minutes: ${totalMinutes}`);
        resolve({ totalWorkouts, totalMinutes });
      })
      .on('error', (error) => {
        console.error("Error reading workout data:", error.message);
        reject(error);
      });
  });
}

module.exports = { workoutCalculator };
