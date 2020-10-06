<?php
// Email submission
if(isset($_POST['submit'])){
    $to = "oadigitalcommunications@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = $_POST['subject'];
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Contact</title>

        <!-- Favicon links -->
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
        <link rel="manifest" href="images/site.webmanifest">
        <link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#603cba">
        <meta name="theme-color" content="#ffffff">

        <!-- Linked Stylesheets -->
        <link rel="stylesheet" href="styles/style.css">
        <link href="styles/hover.css" rel="stylesheet">

        <!-- JavaScript Functions -->
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>

        <div id="header">
            <a href="index.html"><img src="images/whiteOAlogo.png" class="homeLogo hvr-rotate"></a>
            <table class="table">
                <tr>
                    <th><a href="about.html"><h2 class="menuButtons hvr-underline-reveal">About</h2></th></a>
                    <th style="padding-left: 2em"><a href="services.html"><h2 class="menuButtons hvr-underline-reveal">Services</h2></th></a>
                    <th style="padding-left: 2em"><a href="contact.php"><h2 class="menuButtons hvr-underline-reveal">Contact</h2></th></a>
                </tr>
            </table>
        </div>

        <div id="page-container">
            <div id="content-wrap">
            
            <!-- Content -->
            <div class="wrapper">
                <div>
            <h1>Contact</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque metus, volutpat quis laoreet vel, pharetra in risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras malesuada lobortis nisl eget sodales. Vivamus ac elit et nulla dignissim tincidunt ac a dolor. Sed non libero cursus, elementum eros bibendum, faucibus eros. Sed fermentum urna vitae faucibus auctor. In a leo nec quam interdum vestibulum et eu lectus. Nunc semper massa in libero condimentum auctor. Aliquam eu erat condimentum, laoreet nulla eu, imperdiet ex. Proin et lorem ut nunc tincidunt faucibus eu egestas magna. Nunc tristique sodales justo. Quisque in facilisis arcu.</p>
            </div>
            </div>

            <!-- Contact Form-->
            <div class="containerFormOuter">
            <div class="containerFormInner">
                <form action="contact.php" method="post">

                    <label>First Name</label>
                    <input type="text" name="first_name" placeholder="Your name..">

                    <label>Last Name</label>
                    <input type="text" name="last_name" placeholder="Your last name..">

                    <label>Email</label>
                    <input type="text" name="email" placeholder="Your email..">

                    <label>Subject</label>
                    <input type="text" name="subject" placeholder="Email subject..">

                    <label>Message</label>
                    <textarea name="message" placeholder="Write something.." style="height:200px"></textarea>

                    <input type="submit" name="submit" value="Submit" onclick="return confirm('Thank you for your email!')">
                  </form>
            </div>
            </div>


            </div>
            <footer id="footer"><p class="information">2020 &#169 Overt-Analysis</p></footer>
        </div>

    </body>
</html>