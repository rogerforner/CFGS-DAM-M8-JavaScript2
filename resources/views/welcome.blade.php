<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>Document</title>
    <link rel="stylesheet" href="css/app.css">
</head>
<body>

<div id="app">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <button id="getuser" class="btn btn-primary">Get user</button>

                Usuari: <input type="text" id ="user" name="user">


            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                Usuari: <input type="text" id ="userpost" name="userpost" value="rogerforner">
                <button id="postuser" class="btn btn-primary">Post user</button>
            </div>
        </div>

    </div>

</div>


<script src="js/app.js"></script>
</body>
</html>