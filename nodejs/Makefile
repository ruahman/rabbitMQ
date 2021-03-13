include ../../javascript/nodejs/docker/Makefile
rabbitMQPath=../docker/

name=rabbitmq-nodejs
network=rabbitmq-net

.PHONY: rabbitmq
rabbitmq:
ifndef arg
	cd $(rabbitMQPath); $(MAKE) run	network=$(network)
else
	cd $(rabbitMQPath); $(MAKE) $(arg) network=$(network)
endif