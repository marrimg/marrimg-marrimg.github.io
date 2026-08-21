export default {
  async fetch(request, env) {
    // Use env.MY_KV here, or fall through to assets
    return env.ASSETS.fetch(request);
  },
};
