function facts() {
  const https = require('https');

  return new Promise((resolve, reject) => {
    https.get('https://uselessfacts.jsph.pl/api/v2/facts/random', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const fact = JSON.parse(data);
          resolve(fact.text);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

module.exports = facts;