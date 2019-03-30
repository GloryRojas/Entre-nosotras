import { initRouter } from './router.js';

const init = () => {
    const config = {
        apiKey: "AIzaSyA5ECWynrP8zNnCmxOQhrxVaelavvN5Ilc",
        authDomain: "entre-nosotras-52991.firebaseapp.com",
        databaseURL: "https://entre-nosotras-52991.firebaseio.com",
        projectId: "entre-nosotras-52991",
        storageBucket: "entre-nosotras-52991.appspot.com",
        messagingSenderId: "911235561383"
      };
      firebase.initializeApp(config);
    initRouter();
    
}
window.addEventListener('load', init)
