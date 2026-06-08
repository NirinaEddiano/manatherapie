import { Pool } from 'pg';
import dns from 'dns';

const originalLookup = dns.lookup;
dns.lookup = function (hostname, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else if (typeof options === 'number') {
    options = { family: options };
  } else if (!options) {
    options = {};
  }
  options.family = 4;
  return originalLookup(hostname, options, callback);
};

function createPool() {
  return new Pool({
    connectionString: process.env.POSTGRES_URL,
  });
}

let pool;

if (process.env.NODE_ENV === 'production') {
  pool = createPool();
} else {
  if (!global._pgPool) {
    global._pgPool = createPool();
  }
  pool = global._pgPool;
}

export default pool;
