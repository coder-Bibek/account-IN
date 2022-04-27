install:
	yarn install

install.all: install install.app install.server install.api

install.app:
	npx lerna exec --scope @accountin/client -- make install

install.server:
	npx lerna exec --scope @accountin/server -- make install

install.api:
	npx lerna exec --scope @accountin/api -- make install

prettier.all:
	npx lerna exec --scope @accountin/client -- make prettier
	npx lerna exec --scope @accountin/server -- make prettier

run.app:
	npx lerna exec --scope @accountin/client -- make run

test.app:
	npx lerna exec --scope @accountin/client -- make test

run.api:
	npx lerna exec --scope @accountin/api -- make run

run.server:
	npx lerna exec --scope @accountin/server -- make run

