var Discordie = require("discordie");
var Events = Discordie.Events;

var client = new Discordie();

client.connect({ token: "" }); 

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "ping")
//if the message is ping
    e.message.channel.sendMessage("Luniox.mcpro.io 1.11.2");
//send pong to the channel the message was in
});
