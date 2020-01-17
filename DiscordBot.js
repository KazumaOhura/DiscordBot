const ServerState = require("./MinecraftState");
const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NjY0NzY1ODM2NTE0Mjk1ODA5.Xhb1nw.67MMUZpsfsfIdTD_bQkCnJsdPN4";

client.on("ready",() =>{
console.log("ready...");
console.log(ServerState.GetState().HostName);
});

client.on("message", message =>{
    if(message.author.bot){
        return;
    }

    if(message.content.match(/!/)){
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = "";

        if(message.content.match(/help/)){
            reply_text = "\n!ServerName => サーバーのホストネーム\n!Version => 対応しているクライアントバージョン\n!ServerState => サーバーの稼働状況\n!Player => 接続人数、接続中プレイヤー名\n";
            message.reply(reply_text)
            .then(message => console.log("Sent message: ${reply_text}"))
            .catch(console.error);    
        }
        else if(message.content.match(/server/) || message.content.match(/Server/)){
              if(message.content.match(/host/) || message.content.match(/Host/) || message.content.match(/name/) || message.content.match(/Name/)){
                reply_text = "\nServerHost : " + ServerState.GetState().HostName + "\n";
                message.reply(reply_text)
                .then(message => console.log("Sent message: ${reply_text}"))
                .catch(console.error); 
              }else if(message.content.match(/state/) || message.content.match(/State/)){
                reply_text = "\nServerState : " + ServerState.GetState().IsOnline + "\n";
                message.reply(reply_text)
                .then(message => console.log("Sent message: ${reply_text}"))
                .catch(console.error); 
              }else{
                return;
              }
        }
        else if(message.content.match(/version/) || message.content.match(/Version/)){
            reply_text = "\nVersion :" + ServerState.GetState().ServerVersion + "\n";
            message.reply(reply_text)
            .then(message => console.log("Sent message: ${reply_text}"))
            .catch(console.error); 
        }
        else if(message.content.match(/player/) || message.content.match(/Player/)){
            reply_text = "\n接続人数 : " + ServerState.GetState().OnlinePlayer + "/" + ServerState.GetState().MaxPlayer + "\n" + "接続プレイヤー : " + ServerState.GetState().PlayerList + "\n";
            message.reply(reply_text)
            .then(message => console.log("Sent message: ${reply_text}"))
            .catch(console.error); 
        }
    }else{
       // return;
    }

});

client.login(token);