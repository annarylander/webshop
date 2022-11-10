# Plant shop

This is a webshop created with Typecript, React, Express and MongoDb.

## Run project with docker

1. Clone the repository:

```bash
git clone https://github.com/annarylander/webshop.git
```

2. Create an .env file in workspaces/server and include the following environment variable:

```bash
JWT_SECRET = choose a secret token
```

3. Use this command to run the project:

```bash
docker compose up --build
```


### Create an Admin user

In this webshop you can chose between roles "customer" or "admin". 
To change between these two, follow these steps:

1. Go into the database and pick one user.
2. Change the role "customer" to "admin".
3. Reload page.