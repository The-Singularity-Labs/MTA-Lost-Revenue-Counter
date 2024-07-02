
CURRENT_DIR := $(shell pwd)

all: build


build:
	rm -rf dist/*
	rm -rf app/.parcel-cache
	cd app && yarn build
	
dev:
	cd app && yarn run dev --host 127.0.0.1 --port 41119