
## New Backend 
```sh
mkdir backend
django-admin startproject project .

```


## FrontEnd Setup

```sh
# https://vite.dev/guide/
npm create vite@latest

cd frontend
npm install

npm run dev

```

### Initial Setup 

- Bootstrap Setup : https://getbootstrap.com/docs/5.0/getting-started/introduction/
```sh
# css cdn : Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.
# -> raw copy 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

# -> pasted copy in index.html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">


# js cdn
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
