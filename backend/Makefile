build: 
	docker-compose build server
	docker-compose run server python src/manage.py migrate

run:
	docker-compose up -d server

migrations:
	docker-compose run server python src/manage.py makemigrations


migrate:
	docker-compose run server python src/manage.py migrate

test:
	docker-comose run server python src/manage.py test ${tests}

shell:
	docker-compose run server python src/manage.py shell

