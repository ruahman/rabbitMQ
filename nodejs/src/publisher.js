const amqp = require("amqplib");

const msg = {number: process.argv[2]}

async function connect() {
    try {
      const connection = await amqp.connect("amqp://rabbitmq:5672");
      const channel = await connection.createChannel();
      const result = await channel.assertQueue("jobs");
      channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
      console.log("Job sent successfully");
    }
    catch(ex){
      console.error(ex)
    }
}

connect();