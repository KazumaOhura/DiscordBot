    var https = require("https");
    var TmpData = [];

    var FileUrl = "https://api.mcsrvstat.us/2/kasmin.net";
    var File = https.get(FileUrl, function (res) {
        res.on("data", function(chunk){
            TmpData.push(chunk);
        }).on("end", function(){
            var events = Buffer.concat(TmpData);

            console.log(events);
            console.log(JSON.parse(events));
            return JSON.parse(events, function(key, value){
                
            });
        })
    });

    function MakeData(){
        return State = {
            Icon:File["icon"],
            HostName:File["hostname"],
            IsOnline:File["online"],
            ServerVersion:File["version"],
            MaxPlayer:File["max"],
            OnlinePlayer:File["online"],
            PlayerList:GetPlayerList()
        };
    }

    function GetPlayerList(){
        const Player = {
            online:File["online"],
            list:File["list"],
        }

        if(Player.online < 2){
            return "Don't connect any players.";
        }else{
            return Player.list;
        }
    }

    exports.GetState = function(){
        return MakeData();
    }