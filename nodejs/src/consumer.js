const amqp = require("amqplib");


async function connect() {
    try {
      const connection = await amqp.connect("amqp://rabbitmq:5672");
      const channel = await connection.createChannel();
      const result = await channel.assertQueue("jobs");

      channel.consume("jobs", message => {
        const input = JSON.parse(message.content.toString());
        console.log(input);
        channel.ack(message);
      })

      console.log("waiting for messages...");
    }
    catch(ex){
      console.error(ex)
    }
}

connect();