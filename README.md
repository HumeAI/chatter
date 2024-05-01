# Chatter, a daily news podcast

This example Next.js app showcases the web search capabilities of Hume's Empathic Voice Interface.

### Running the app locally

1. Log into [https://beta.hume.ai](https://beta.hume.ai) and create an EVI configuration with the `web_search` built-in tool. Visit [the Hume documentation](https://dev.hume.ai) for a tutorial on how to set this up.

2. Create an .env.local file and fill in the following variables.

```
VOICE_API_KEY={your API key}
VOICE_CLIENT_SECRET={your client secret}
NEXT_PUBLIC_VOICE_HOSTNAME=api.hume.ai
NEXT_PUBLIC_VOICE_CONFIG_ID={the configuration ID you created in step 1}
```

3. Run the dev server

```
pnpm install
pnpm dev
```

4. Open `http://localhost:4444` in your browser to view the app.