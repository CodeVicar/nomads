import mixpanel from 'mixpanel-browser';

const initMixpanel = () => {
  if (typeof window !== 'undefined') {
    mixpanel.init('11c66f8a82188d2591e985b37929f760', {
      debug: process.env.NODE_ENV !== 'production',
      // track_pageview: true,
      persistence: 'localStorage',
    });
  }
};

export default initMixpanel;