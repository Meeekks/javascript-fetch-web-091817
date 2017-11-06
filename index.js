const app = "I don't do much.";

const token = "a76b607c76c2bbd056dec7ad99bfc69af519fdbb"
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
