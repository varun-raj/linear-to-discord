# 🔌 Linear to Discord  

A simple webhook service for sending linear notifications to discord.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvarun-raj%2Flinear-to-discord&env=DISCORD_WEBHOOK&envDescription=Discord%20webhook&envLink=https%3A%2F%2Fsupport.discord.com%2Fhc%2Fen-us%2Farticles%2F228383668-Intro-to-Webhooks&project-name=linear-to-discord&repository-name=linear-to-discord)

## Usage

1. Create a discord webhook in the channel you want to send notifications to. [Guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)
2. Copy the webhook url and add it as an environment variable named `DISCORD_WEBHOOK` in the vercel project.
3. Deploy the project to vercel.
4. Add the webhook url to linear. [Guide](https://linear.app/settings/api)
5. Done! You should now receive notifications in the discord channel.

## Development 

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.


## Deployment 
You can use the vercel button above to deploy the project to vercel or follow the steps below to deploy it manually.

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run `npm run build` to build the project.
4. Run `npm run start` to start the server.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)


