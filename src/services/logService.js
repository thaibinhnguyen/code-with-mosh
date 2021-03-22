function init() {
  // Sentry.init({
  //   dsn:
  //     "https://3f3b10c996344a19972465172286bcac@o550372.ingest.sentry.io/5673921",
  //   integrations: [new Integrations.BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  // tracesSampleRate: 1.0,
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.log(error);
}

export default {
  init,
  log,
};
