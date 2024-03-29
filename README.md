# API

Feita com framework Adonis, utilizando autenticação para sessão e ACL

## Setup

Passos para a execução

1. Precisa baixar um software para testar sua api. Opção: postman: https://www.getpostman.com/ ou insomnia: https://insomnia.rest/
2. Instalar o yarn o npm(dependency management)
3. Baixar os pacotes com o comando "yarn" ou o "npm install"
4. Subir o container com o banco relacional postgres. Com o comando:

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

uma vez o banco configurado, execute o comando

```
adonis serve --dev

```

5. Subir o container do redis para fila(queue) com o comando:

```
docker run --name nome_da_fila -p 6379:6379 -d -t redis:alpine
```

uma vez o redis configurado, execute o comando

```
adonis kue:listen

```

### Adonis comando basicos

```
adonis migration:run
```

```
adonis route:list
```

```
adonis migration:run
```

```
adonis make:validator Nome
```

```
adonis make:hook Nome
```

```
adonis make:controller Nome
```

```
adonis key:generate
```

```
adonis make:seed
```

```
adonis serve --dev
```

Aparecere mais comandos

```
adonis
```

### Iniciar projeto

Ajuda a padronizar o projeto entre os demais desenvolvedores

```
yarn eslint --init
```
