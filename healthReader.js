const fs = require('fs').promises;

async function healthMetricsCounter(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(data);

    const totalEntries = json.length;
    console.log(`Total health entries: ${totalEntries}`);

    return totalEntries;
  } catch (error) {
    console.error("Error reading health data:", error.message);
    throw error;
  }
}

module.exports = { healthMetricsCounter };
