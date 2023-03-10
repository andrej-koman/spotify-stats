# spotify-stats
>An app that allows you to view your spotify statistics. Built with Express on the server side and Svelte on client side.
![image](https://user-images.githubusercontent.com/97840968/217775268-77c78727-9695-4bf6-ae58-edbe8a130d83.png)

## Setup
1. Register a [Spotify app](https://developer.spotify.com/dashboard/) and add http://localhost:3000/callback to its callback urls (**Make sure to save the settings!**)

![Spotify callback url](https://user-images.githubusercontent.com/97840968/217767243-849dc51f-1358-4363-b3eb-52974e6cebef.png)

2. Clone this repository, install dependencies (make sure you have Node installed) and create a .env file based on .env.example (CLIENT_ID and CLIENT_SECRET are provided in the [Spotify app](https://developer.spotify.com/dashboard/))
```bash
git clone https://github.com/andrej-koman/spotify-stats
cd spotify-stats
npm install
```

3. Check if your CLIENT_ID and CLIENT_SECRET match the ones on the spotify dashboard and run the app
```
npm start
```
4. Open your browser and go to url http://localhost:5173/
