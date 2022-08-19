#!make
include .env
export $(shell sed 's/=.*//' .env)

clean:
	rm -rf */data

export: export.mariadb

export.mariadb:
	docker exec -it ${WORKSPACE}-mariadb mysqldump \
		-u${MARIADB_USER} \
		-p${MARIADB_PASSWORD} \
		--no-data \
		${MARIADB_DATABASE} > mariadb/fixtures/${MARIADB_DATABASE}.sql
	docker exec -it ${PROJECT}-mariadb mysqldump \
		-u${MARIADB_USER} -p${MARIADB_PASSWORD} --no-create-info \
		-c ${MARIADB_DATABASE} | awk '{gsub(/\),/, "&\n")}1' | awk '{gsub(/ VALUES /, " VALUES\n")}1' \
		>> mariadb/fixtures/${MARIADB_DATABASE}.sql
	rm fixtures/${MARIADB_DATABASE}.sql.gz
	gzip -k fixtures/${MARIADB_DATABASE}.sql

start:
	docker compose up -d

stop:
	docker compose -f docker-compose.yml down \
		--rmi local \
		--remove-orphans \
		--volumes