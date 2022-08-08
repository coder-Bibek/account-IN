#!make
include .env
export $(shell sed 's/=.*//' .env)

clean:
	rm -rf */data

export: export.mariadb export.mariadb.supertokens

export.mariadb:
	@printf "\033[0;32m>>> Dumping database data\033[0m\n"
	docker exec -it ${WORKSPACE}-mariadb mysqldump \
		-u${MARIADB_USER} \
		-p${MARIADB_PASSWORD} \
		--no-data \
		${MARIADB_DATABASE} > mariadb/fixtures/${MARIADB_DATABASE}.sql
	docker exec -it ${PROJECT}-mariadb mysqldump \
		-u${MARIADB_USER} -p${MARIADB_PASSWORD} --no-create-info \
		# --ignore-table ...
		-c ${MARIADB_DATABASE} | awk '{gsub(/\),/, "&\n")}1' | awk '{gsub(/ VALUES /, " VALUES\n")}1' \
		>> mariadb/fixtures/${MARIADB_DATABASE}.sql
	rm fixtures/${MARIADB_DATABASE}.sql.gz
	gzip -k fixtures/${MARIADB_DATABASE}.sql

export.mariadb.supertokens:
	@printf "\033[0;32m>>> Dumping supertokens database\033[0m\n"
	docker exec -it ${WORKSPACE}-mariadb mysqldump \
		-uroot -p${MARIADB_ROOT_PASSWORD} \
		--add-drop-database \
		--databases ${SUPERTOKENS_DATABASE} > mariadb/fixtures/supertokens.sql
	rm mariadb/fixtures/${SUPERTOKENS_DATABASE}.sql.gz
	gzip -k mariadb/fixtures/${SUPERTOKENS_DATABASE}.sql

start:
	docker compose up -d

stop:
	docker compose -f docker-compose.yml down \
		--rmi local \
		--remove-orphans \
		--volumes