ifneq (,$(wildcard ./.env))
    include .env
    export
endif

# Local Development & Docker
.PHONY: up dev build down restart logs logs-api logs-web clean

# Database Management
.PHONY: db-generate db-migrate db-studio

# Quality Control & Testing
.PHONY: lint format sync test test-affected

# AWS Deployment & Operations
.PHONY: deploy-web logs-prod-web status-prod-web

# ---------- Local Development ----------
up:
	docker compose up -d

dev:
	docker compose up --build

build:
	docker compose build --no-cache

build-prod:
	npx nx run-many -t build typecheck

down:
	docker compose down

restart:
	docker compose restart

logs:
	docker compose logs -f

logs-api:
	docker compose logs -f api

logs-web:
	docker compose logs -f web

# ---------- Quality & Testing ----------
test:
	npx nx run-many -t test

test-affected:
	npx nx affected -t test

lint:
	npx nx run-many -t lint

format:
	npx nx format:write

sync:
	npx nx sync

clean:
	npx nx reset
	docker compose down -v
	rm -rf dist

# ---------- Database ----------
db-generate:
	npx nx run db:generate

db-migrate:
	@read -p "Enter migration name: " name; \
	npx nx run db:migrate --name=$$name

db-studio:
	npx nx run db:studio

# ---------- AWS Cloud Operations ----------
deploy-web:
	copilot svc deploy --name web --env prod

logs-prod-web:
	copilot svc logs --name web --env prod --follow

status-prod-web:
	copilot svc show --name web