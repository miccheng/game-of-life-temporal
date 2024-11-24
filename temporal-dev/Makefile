.PHONY: help, run, build
.DEFAULT_GOAL := help

help:
	@echo "Usage: make [run|build]"

run: ## Run the docker container
	docker run --rm  -p 7233:7233 -p 8233:8233 temporal-dev

build: ## Build the docker container
	docker build -t temporal-dev .