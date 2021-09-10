<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./style.css">
    <script src="./index.js" defer ></script> 
    <title>Document</title>
</head>
<body>
    <header>
        <button id="yes">yes</button>
        <button id="no">no</button>
        <p id="value">50</p>
        <div id="button">
            <p>0</p>
            <input  id="range" type="range" min=0 max=100>
            <p>100</p>
        </div>
    </header>
    <div id="main">
        <div class="card jordan">
            <?php 
             $src = './imges/img1.jpg' ;
             echo '<img id="img" class="img" src=" ' . $src . '" alt="">';
            ?>
            <div class="subtext">
                <p>Marque</p>
                <p>Prix</p>
                <p class="price">50</p>
            </div>
            <div id="divsubimg">
                <img data-subimg="img1" class="subimg" src="./imges/img5.jpg" alt="">
                <img data-subimg="img2" class="subimg" src="./imges/img6.jpeg" alt="">
            </div>
        </div>
        <div class="card nike jordan">
            <img class="img" src="./imges/img2.jpeg" alt="">
            <div class="subtext">
                <p>Marque</p>
                <p>Prix</p>
                <p class="price">72</p>
            </div>
        </div>
        <div class="card">
            <img class="img" src="./imges/img3.jpeg" alt="">
            <div class="subtext">
                <p>Marque</p>
                <p>Prix</p>
                <p class="price">27</p>
            </div>
        </div>
        <div class="card">
            <img class="img" src="./imges/img4.jpeg" alt="">
            <div class="subtext">
                <p>Marque</p>
                <p>Prix</p>
                <p class="price">40</p>
            </div>
        </div>
    </div>
</body>
</html>