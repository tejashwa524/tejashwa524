<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>ROYAL STAR TOUR DIGITAL VIP RESTAURANT </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="ere3r.css">
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>
    <link rel="icon" href="file:///C:/Users/Lenovo/Downloads/logo_5850.jpg" type="image/png">
</head>

<body>

    <!-- header -->
    <header class="header" id="header">
        <div class="head-top">
            <div class="site-name">
                <span>R_S_T_D</span>
            </div>
            <div class="site-nav">
                <span id="nav-btn">MENU <i class = "fas fa-bars"></i></span>
            </div>
        </div>

        <div class="head-bottom flex">
            <h2>NICE AND COMFORTABLE PLACE TO STAY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est quos veniam impedit numquam itaque voluptatum, dicta asperiores accusamus, eligendi neque ut incidunt, modi harum molestiae atque natus officia minima.</p>
            <button type="button" class="head-btn">GET STARTED</button>
        </div>
    </header>
    <!-- end of header -->

    <!-- side navbar -->
    <div class="sidenav" id="sidenav">
        <span class="cancel-btn" id="cancel-btn">
                <i class = "fas fa-times"></i>
            </span>

        <ul class="navbar">
            <li><a href="#header">home</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#rooms">rooms</a></li>
            <li><a href="#customers">customers</a></li>
        </ul>
        <button class="btn sign-up">sign up</button>
        <button class="btn log-in">log in</button>
    </div>
    <!-- end of side navbar -->

    <!-- fullscreen modal -->
    <div id="modal"></div>
    <!-- end of fullscreen modal -->

    <!-- body content  -->
    <section class="services sec-width" id="services">
        <div class="title">
            <h2>services</h2>
        </div>
        <div class="services-container">
            <!-- single service -->
            <article class="service">
                <div class="service-icon">
                    <span>
                            <i class = "fas fa-utensils"></i>
                        </span>
                </div>
                <div class="service-content">
                    <h2>Food Service/ Food Runner</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio
                        perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                    <button type="button" class="btn">Know More</button>
                </div>
            </article>
            <!-- end of single service -->
            <!-- single service -->
            <article class="service">
                <div class="service-icon">
                    <span>
                            <i class = "fas fa-swimming-pool"></i>
                        </span>
                </div>
                <div class="service-content">
                    <h2>Refreshment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio
                        perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                    <button type="button" class="btn">Know More</button>
                </div>
            </article>
            <!-- end of single service -->
            <!-- single service -->
            <article class="service">
                <div class="service-icon">
                    <span>
                            <i class = "fas fa-broom"></i>
                        </span>
                </div>
                <div class="service-content">
                    <h2>Housekeeping</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio
                        perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                    <button type="button" class="btn">Know More</button>
                </div>
            </article>
            <!-- end of single service -->
            <!-- single service -->
            <article class="service">
                <div class="service-icon">
                    <span>
                            <i class = "fas fa-door-closed"></i>
                        </span>
                </div>
                <div class="service-content">
                    <h2>Room Security</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio
                        perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                    <button type="button" class="btn">Know More</button>
                </div>
            </article>
            <!-- end of single service -->
        </div>
    </section>

    <div class="book">
        <form class="book-form">
            <div class="form-item">
                <label for="checkin-date">Check In Date: </label>
                <input type="date" id="chekin-date">
            </div>
            <div class="form-item">
                <label for="checkout-date">Check Out Date: </label>
                <input type="date" id="chekout-date">
            </div>
            <div class="form-item">
                <label for="adult">Adults: </label>
                <input type="number" min="1" value="1" id="adult">
            </div>
            <div class="form-item">
                <label for="children">Children: </label>
                <input type="number" min="1" value="1" id="children">
            </div>
            <div class="form-item">
                <label for="rooms">Rooms: </label>
                <input type="number" min="1" value="1" id="rooms">
            </div>
            <div class="form-item">
                <input type="submit" class="btn" value="Book Now">
            </div>
        </form>
    </div>

    <section class="rooms sec-width" id="rooms">
        <div class="title">
            <h2>rooms</h2>
        </div>
        <div class="rooms-container">
            <!-- single room -->
            <article class="room">
                <div class="room-image">
                    <img src="file:///C:/Users/Lenovo/Downloads/vip-room-2.jpg" alt="room image">
                </div>
                <div class="room-text">
                    <h3>Luxury Rooms</h3>
                    <ul>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis
                        qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                    <p class="rate">
                        <span>$99.00 /</span> Per Night
                    </p>
                    <button type="button" class="btn">book now</button>
                </div>
            </article>
            <!-- end of single room -->
            <!-- single room -->
            <article class="room">
                <div class="room-image">
                    <img src="file:///C:/Users/Lenovo/Downloads/download%20(4).jfif" alt="room image">
                </div>
                <div class="room-text">
                    <h3>Luxury Rooms</h3>
                    <ul>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis
                        qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                    <p class="rate">
                        <span>$99.00 /</span> Per Night
                    </p>
                    <button type="button" class="btn">book now</button>
                </div>
            </article>
            <!-- end of single room -->
            <!-- single room -->
            <article class="room">
                <div class="room-image">
                    <img src="file:///C:/Users/Lenovo/Downloads/download%20(5).jfif" alt="room image">
                </div>
                <div class="room-text">
                    <h3>Luxury Rooms</h3>
                    <ul>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <i class="fas fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.
                        </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis
                        qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                    <p class="rate">
                        <span>$99.00 /</span> Per Night
                    </p>
                    <button type="button" class="btn">book now</button>
                </div>
            </article>
            <!-- end of single room -->
        </div>
    </section>


    <section class="customers" id="customers">
        <div class="sec-width">
            <div class="title">
                <h2>customers</h2>
            </div>
            <div class="customers-container">
                <!-- single customer -->
                <div class="customer">
                    <div class="rating">
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "far fa-star"></i></span>
                    </div>
                    <h3>We Loved it</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                    <img src="file:///C:/Users/Lenovo/Downloads/images%20(2).jfif" alt="customer image">
                    <span>Customer Name, Country</span>
                </div>
                <!-- end of single customer -->
                <!-- single customer -->
                <div class="customer">
                    <div class="rating">
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "far fa-star"></i></span>
                    </div>
                    <h3>Comfortable Living</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                    <img src="file:///C:/Users/Lenovo/Downloads/images%20(2).jfif" alt="customer image">
                    <span>Customer Name, Country</span>
                </div>
                <!-- end of single customer -->
                <!-- single customer -->
                <div class="customer">
                    <div class="rating">
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "far fa-star"></i></span>
                    </div>
                    <h3>Nice Place</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                    <img src="file:///C:/Users/Lenovo/Downloads/images%20(1).jfif" alt="customer image">
                    <span>Customer Name, Country</span>
                </div>
                <!-- end of single customer -->
            </div>
        </div>
    </section>
    <!-- end of body content -->

    <!-- footer -->
    <footer class="footer">
        <div class="footer-container">
            <div>
                <h2>About Us </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente mollitia doloribus provident? Eos quisquam aliquid vel dolorum, impedit culpa.</p>
                <ul class="social-icons">
                    <li class="flex">
                        <i class="fa fa-twitter fa-2x"></i>
                    </li>
                    <li class="flex">
                        <i class="fa fa-facebook fa-2x"></i>
                    </li>
                    <li class="flex">
                        <i class="fa fa-instagram fa-2x"></i>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Useful Links</h2>
                <a href="#">Blog</a>
                <a href="#">Rooms</a>
                <a href="#">Subscription</a>
                <a href="#">Gift Card</a>
            </div>

            <div>
                <h2>Privacy</h2>
                <a href="#">Career</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Services</a>
            </div>

            <div>
                <h2>Have A Question</h2>
                <div class="contact-item">
                    <span>
                            <i class = "fas fa-map-marker-alt"></i>
                        </span>
                    <span>
                            F489,Delta 1,Gautam Buddh Nagar,Greater Noida,UP, INDIA,ASIA
                        </span>
                </div>
                <div class="contact-item">
                    <span>
                            <i class = "fas fa-phone-alt"></i>
                        </span>
                    <span>
                            +917840803407
                        </span>
                </div>
                <div class="contact-item">
                    <span>
                            <i class = "fas fa-envelope"></i>
                        </span>
                    <span>
                            tejashwatripathi88@gmail.com
                        </span>
                </div>
            </div>
        </div>
    </footer>
    <!-- end of footer -->

    <script src="ere3r.js"></script>
</body>

</html>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
:root {
    --transition: all 0.7s ease;
    --yellow: #f9d342;
    --dark: #292826;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Playfair Display', serif;
}

html {
    scroll-behavior: smooth;
}

body {
    line-height: 1.6;
}

.btn {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 140px;
    display: block;
    margin: 15px auto;
    cursor: pointer;
    transition: var(--transition);
}

.btn:hover {
    opacity: 0.85;
}

.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    padding: 8px 0;
}

img {
    width: 100%;
    display: block;
}

@media(max-width: 500px) {
    body {
        font-size: 14px;
    }
}


/* header */

.header {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url("file:///C:/Users/Lenovo/Downloads/images.jfif") center/cover no-repeat;
    min-height: 100vh;
    color: #fff;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-content: stretch;
}

.head-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.head-top span {
    cursor: pointer;
    letter-spacing: 2px;
    transition: var(--transition);
}

.head-top span:hover {
    color: var(--yellow);
}

.head-bottom {
    flex: 1;
    text-align: center;
    width: 80vw;
    margin: 0 auto;
}

.head-bottom h2 {
    padding: 22px 0;
    font-size: 45px;
    border-bottom: 1px solid #fff;
}

.head-bottom p {
    opacity: 0.7;
    font-size: 20px;
    margin: 45px auto;
    width: 60vw;
}

.head-btn {
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
    border: 3px solid #fff;
    background: transparent;
    padding: 13px 20px;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    cursor: pointer;
    transition: var(--transition);
}

.head-btn:hover {
    background: transparent;
}

@media(max-width: 500px) {
    .head-btn {
        font-size: 17px;
    }
    .head-bottom h2 {
        font-size: 28px;
    }
    .head-bottom p {
        font-size: 17px;
        margin: 20px auto;
    }
}


/* side nav */

.sidenav {
    background: var(--dark);
    color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -100%;
    width: 300px;
    padding: 20px;
    transition: var(--transition);
    z-index: 10;
}


/********/

.sidenav.show {
    right: 0;
}


/*************/

.cancel-btn {
    position: absolute;
    right: 25px;
    font-size: 22px;
    cursor: pointer;
    transition: var(--transition);
}

.cancel-btn:hover {
    opacity: 0.7;
}

.navbar {
    margin-top: 50px;
    list-style: none;
    padding: 12px;
}

.navbar li a {
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;
    padding: 15px 0;
    display: block;
    border-bottom: 0.5px solid rgba(249, 211, 66, 0.3);
    opacity: 0.8;
    letter-spacing: 1.5px;
    transition: var(--transition);
}

.navbar li a:hover {
    padding-left: 12px;
}

.sign-up,
.log-in {
    background: var(--yellow);
    color: #fff;
}

@media(max-width: 400px) {
    .sidenav {
        width: 100vw;
    }
}


/** title */

.title {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 30px;
    color: var(--yellow);
    border-bottom: 5px solid var(--dark);
    width: 235px;
    margin: 15px 0;
}

.sec-width {
    width: 85vw;
    margin: 0 auto!important;
}


/* service */

.services {
    margin: 40px 0;
}

.service {
    display: flex;
    margin: 30px 0;
}

.service-icon {
    flex: 30%;
    align-self: flex-start;
    font-size: 48px;
    color: #252525;
}

.service-content {
    padding-left: 20px;
}

.service-content h2 {
    opacity: 0.7;
}

.service-content button {
    margin-left: 0;
    margin-right: 0;
    background: var(--yellow);
    color: #fff;
}

@media(min-width: 992px) {
    .services-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 30px;
    }
    .title h2 {
        font-size: 10px!important;
    }
}

@media(max-width: 500px) {
    .title h2 {
        font-size: 24px;
    }
}


/* booking form */

.book {
    background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("file:///C:/Users/Lenovo/Downloads/download%20(3).jfif") center/cover no-repeat;
    color: #fff;
    padding: 40px 60px;
}

.book-form {
    display: grid;
}

.form-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.book-form input[type="submit"] {
    margin: 18px 0 0 0;
    background: var(--dark);
    color: #fff;
    border: 1px solid #fff;
}

.book-form label,
.book-form input {
    width: 100%;
}

.book-form label {
    font-weight: 600;
    word-spacing: 5px;
    padding-bottom: 8px;
}

.book-form input:not(.btn) {
    margin: 4px 0 16px 0;
    padding: 12px 15px;
    border-radius: 5px;
    font-size: 17px;
    border: none;
}

.book-form input:focus {
    outline: 0;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.4);
}

@media(min-width: 768px) {
    .book-form {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
    }
}

@media(min-width: 1170px) {
    .book-form {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media(min-width: 1370px) {
    .book-form {
        grid-template-columns: 2fr 2fr 1fr 1fr 1fr 2fr;
    }
    .book {
        height: 40vh;
        display: grid;
    }
}

@media(max-width: 500px) {
    .book {
        padding-left: 20px;
        padding-right: 20px;
    }
}


/* room */

.rooms {
    margin: 40px 0;
}

.room {
    margin: 45px 0;
    padding-bottom: 25px;
    background: var(--dark);
    color: #fff;
}

.room-text {
    padding: 5px 20px;
}

.room-text h3 {
    font-size: 24px;
}

.room-text ul {
    list-style-type: none;
    margin: 15px 0;
}

.room-text ul li {
    padding: 7px 0;
}

.room-text ul li i {
    color: var(--yellow);
    margin-right: 10px;
}

.rate {
    opacity: 0.8;
}

.rate span {
    font-size: 40px;
    font-weight: 900;
    color: var(--yellow);
}

.room-image {
    overflow: hidden;
}

.room-image img {
    transition: var(--transition);
}

.room-image:hover img {
    transform: scale(1.1);
}

@media (min-width: 900px) {
    .rooms-container {
        display: flex;
        flex-wrap: wrap;
    }
    .room {
        flex: 0 0 calc(50% - 20px);
        margin: 10px;
    }
}

@media(min-width: 1370px) {
    .rooms-container {
        flex-direction: column;
    }
    .room {
        display: flex;
        padding-bottom: 0;
        margin: 5px 0;
    }
    .room-image {
        flex: 1;
    }
    .room-image img {
        height: 100%;
    }
    .room-text {
        flex: 1;
    }
    .room:nth-child(even) {
        flex-direction: row-reverse;
    }
}


/* customers */

.customers {
    margin-top: 40px;
    padding: 40px 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("file:///C:/Users/Lenovo/Downloads/download%20(2).jfif") center/cover no-repeat fixed;
}

.customer {
    background: #fff;
    padding: 35px;
    text-align: center;
    margin: 24px 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    transition: var(--transition);
}

.rating {
    margin: 10px 0;
    color: var(--yellow);
}

.customer h3 {
    font-size: 25px;
}

.customer p {
    opacity: 0.7;
    line-height: 1.8;
    width: 60%;
    margin: 0 auto;
}

.customer img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: 25px auto;
}

.customer span {
    font-weight: 700;
    opacity: 0.7;
}

.customer:hover {
    transform: translateY(-18px);
}

@media(min-width: 992px) {
    .customers-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
    }
}

@media(min-width: 1370px) {
    .customers-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

@media(max-width: 500px) {
    .customer p {
        width: 100%;
    }
    .customer img {
        width: 100px;
        height: 100px;
    }
}


/* footer */

.footer {
    background: var(--dark);
    color: #fff;
    text-align: center;
}

.footer-container {
    width: 85vw;
    margin: 0 auto;
    padding: 30px 0;
}

.footer-container p,
.footer-container a,
.footer-container span {
    opacity: 0.8;
}

.footer a {
    display: block;
    color: #fff;
    text-decoration: none;
}

.social-icons {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 15px 0;
}

.social-icons li {
    margin: 0 10px;
    width: 50px;
    height: 50px;
    background: #2e2e2e;
    border-radius: 50%;
    transition: var(--transition);
    cursor: pointer;
}

.social-icons li:hover {
    background: #fff;
    color: #2e2e2e;
}

.contact-item span {
    display: block;
}

@media(min-width: 900px) {
    .footer-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
}

@media(min-width: 1170px) {
    .footer {
        text-align: left;
    }
    .footer-container {
        grid-template-columns: repeat(4, 1fr);
    }
    .footer-container div:nth-child(1) p {
        padding-right: 20px;
    }
    .contact-item {
        display: grid;
        grid-template-columns: 10% 90%;
        margin-bottom: 15px;
        align-items: center;
    }
}

.showModal {
    position: fixed;
    background: transparent;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
}
const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function() {
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function() {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
