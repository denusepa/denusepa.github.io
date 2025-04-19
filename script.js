function message() {
        let message = document.getElementById("message").value;
        
        const webhook = "https://discord.com/api/webhooks/1362014654720901160/0WqktV4Euum2_twnzJmr7l4bhJkcXX0gkh2G59e5nVjXZGtRRlnEniLUMESyG0oNY42-"
        const contents = `Anynomous Message: ${message}`;
        const request = new XMLHttpRequest();
        request.open("POST", webhook);
        request.setRequestHeader('Content-type','application/json');
        const params = {
                content: contents
                }
        request.send(JSON.stringify(params));
        }
