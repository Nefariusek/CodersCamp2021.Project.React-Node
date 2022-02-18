const corsDomains = process.env.CORS_DOMAINS || '';

const whitelist = corsDomains.split(',').map((domain) => domain.trim());

export function getCorsOptions() {
  return {
    origin: getOrigin,
    credentials: true,
  };
}

function getOrigin(origin, callback) {
  if (!origin || !whitelist.includes(origin)) {
    callback(null, true);
  } else {
    callback(new Error('Not allowed by CORS'));
  }
}
