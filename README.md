# Docker and Git Exam

> Simple example of a dockerized Nodejs/Mongodb app

## Quick Start

```bash

########################################################################################
######################## How to run the project using docker compose  ##################
########################################################################################

# step 1
git clone 
 #  Clone un dépôt Git existant depuis un emplacement distant 

git init 
   #Initialise un nouveau dépôt Git vide dans le répertoire courant ou dans le répertoire spécifié.

git add . 
    # Ajoute tous les fichiers et modifications non suivis au prochain commit dans le répertoire de travail.
add gitignore
  node_modules
  # Le fichier .gitignore permet de spécifier les fichiers et répertoires qui ne doivent pas être suivis par Git, ce qui est utile pour exclure des fichiers de build, des fichiers temporaires, des fichiers volumineux, etc.

git branch -M main

 # Renomme la branche par défaut de Git de "master" à "main"

git commit -m "first commit"
#Crée un commit avec les modifications ajoutées précédemment
git remote add origin https://github.com/bayoudh-oumayma/examenTp.git
# Associe un alias "origin" à l'URL du dépôt distant
git push -u origin main
#Pousse vos commits locaux vers le dépôt distant "origin"

#

# step 2
docker build -t 
docker images
add dockerignore
  node_modules
docker run -p 4000:4000 -d examen
docker ps

#partie 3
cree docker-compose.yml
docker-compose up -d
git commit -m
