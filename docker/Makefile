SHELL=/bin/bash

name=rabbitmq
ports=5672:5672
network=$(name)-net

.PHONY: run
run: network 
	docker run --name $(name) --network $(network) -p $(ports) -d $(name)

.PHONY: stop
stop:
	docker container stop $(name)

.PHONY: start
start:
	docker container start $(name)

.PHONY: rm
rm:
	docker container rm $(name)

.PHONY: network
network:
	@if [[ "$(shell docker network inspect $(network) 2> /dev/null)" == "[]" ]]; then \
		docker network create $(network); \
	else \
		echo "network: $(network) is already setup"; \
	fi
