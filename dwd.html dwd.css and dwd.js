<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- Custom Css Links -->
    <link rel="stylesheet" type="text/css" href="dwd.css">

    <!-- Boxicons Links -->
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

    <!-- Remixicons Links -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <!-- Google Fonts Links -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">



</head>

<body>

    <header>
        <a href="#" class="logo">TEJ-STATS</a>

        <ul class="navlist">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Clans</a></li>
            <li><a href="#">Town Hall</li>
            <li><a href="#">Troops</a></li>
            <li> <a href="#">Contact</a></li>

        </ul>

        <div class="bx bx-menu" id="menu-icon"></div>
    </header>

    <section class="hero">
        <div class="hero-text">
            <h5>#2 trending</h5>
            <h4>Lead SuperCell</h4>
            <h1> GOBLINS </h1>
            <p>Join Millions Of Players Worldwide as you build your vilage,<br> raise a clan, and complete in epic lan Wars!!</p>
            <a href="">Compare</a>
            <a href="" class="ctaa">
                <i class="ri-play-fill"></i>Watch Gameplay</a>


        </div>
        <div class="hero-img">
            <img src="file:///C:/Users/Lenovo/OneDrive/Pictures/Screenshots/download.jfif">
        </div>

    </section>

    <div class="icons">
        <a href="#"><i class="ri-instagram-line"></i></a>
        <a href="#"><i class="ri-youtube-line"></i></a>
        <a href="#"><i class="ri-dribbble-line"></i></a>

    </div>
    <div class="scroll-down">
        <a href=""><i class="ri-arrow-down-s-fill"></i></a>

    </div>

    <!---scrollreveal effect--->
    <script src="https://unpkg.com/scrollreveal"></script>


    <!-- Custom Js Links -->
    <script src="dwd.js"></script>

</body>

</html>

<!-- Css File -->
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
}

header {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 33px 9%;
    background: transparent;
}

.logo {
    font-size: 30px;
    font-weight: 700;
    color: white;
}

.navlist {
    display: flex;
}

.navlist a {
    color: white;
    margin-left: 60px;
    font-size: 15px;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: all .55s ease;
}

.navlist a:hover {
    border-bottom: 2px solid white;
}

#menu-icon {
    color: white;
    font-size: 35px;
    z-index: 10001;
    cursor: pointer;
    display: none;
}

.hero {
    height: 100%;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(245.59deg, #4d9559 0%, #38703d 28.53%, #133917 75.52%);
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;
}

section {
    padding: 0 19%;
}

.hero-text h5 {
    font-size: 14px;
    font-weight: 400;
    color: white;
    margin-bottom: 40px;
}

.hero-text h1 {
    font-family: 'Permanent Marker', cursive;
    font-size: 90px;
    line-height: 1;
    color: white;
    margin: 0 0 45px;
}

.hero-text h4 {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 10px;
}

.hero-text p {
    color: white;
    font-size: 15px;
    line-height: 1.9;
    margin-bottom: 40px;
}

.hero-img img {
    width: 700px;
    height: auto;
}

.hero-text a {
    display: inline-block;
    color: white;
    background: #4d9559;
    border: 1px solid transparent;
    padding: 12px 30px;
    line-height: 1.4;
    font-size: 14px;
    font-weight: 500;
    border-radius: 30px;
    text-transform: uppercase;
    transition: all .55s ease;
}

.hero-text a:hover {
    background: transparent;
    border: 1px solid white;
    transform: translateX(8px);
}

.hero-text a.ctaa {
    background: transparent;
    border: 1px solid white;
    margin-left: 20px;
}

.hero-text a.ctaa i {
    vertical-align: middle;
    margin-right: 5px;
}

.icons {
    position: absolute;
    top: 50%;
    padding: 0 9%;
    transform: translateY(-50%);
}

.icons i {
    display: block;
    margin: 26px 0;
    font-size: 24px;
    color: white;
    transition: all .50s ease;
}

.icons i:hover {
    color: #4d9559;
    transform: translateY(-5px);
}

.scroll-down {
    position: absolute;
    bottom: 6%;
    right: 9%;
}

.scroll-down i {
    display: block;
    padding: 12px;
    font-size: 25px;
    color: white;
    background: #4d9559;
    border-radius: 30px;
    transition: all .50s ease;
}

.scroll-down i:hover {
    transform: translateY(-5px);
}

@media (max-width: 1535px) {
    header {
        padding: 15px 3%;
        transition: .2s;
    }
    .icons {
        padding: 0 3%;
        transition: .2s;
    }
    .scroll-down {
        right: 3%;
        transition: .2s;
    }
}

@media (max-width: 1460px) {
    section {
        padding: 0 12%;
        transition: .2s;
    }
}

@media (max-width: 1340px) {
    .hero-img img {
        width: 100%;
        height: auto;
    }
    .hero-text h1 {
        font-size: 75px;
        margin: 0 0 30px;
    }
    .hero-text h5 {
        margin-bottom: 25px;
    }
}

@media (max-width: 1195px) {
    section {
        padding: 0 3%;
        transition: .2s;
    }
    .hero-text {
        padding-top: 115px;
    }
    .hero-img {
        text-align: center;
    }
    .hero-img img {
        width: 560px;
        height: auto;
    }
    .hero {
        height: 100%;
        gap: 1rem;
        grid-template-columns: 1fr;
    }
    .icons {
        display: none;
    }
    .scroll-down {
        display: none;
    }
}

@media (max-width: 990px) {
    #menu-icon {
        display: block;
    }
    .navlist {
        position: absolute;
        top: 100%;
        right: -100%;
        width: 300px;
        height: 40vh;
        background: #4d9559;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 50px 20px;
        transition: all .55s ease;
    }
    .navlist a {
        margin-left: 0;
        display: block;
        margin: 7px 0;
    }
    .navlist.open {
        right: 0;
    }
}

@media (max-width: 680px) {
    .hero-img img {
        width: 100%;
        height: auto;
    }
}
<!-- Js File -->
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });
