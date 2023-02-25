<?php
//get data from form  
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$schedule = $_POST["schedule"];
$country = $_POST["country"];
$visa = $_POST["visa"];
$date = $_POST["date"];
$time = $_POST["time"];
$to = "wellsideasonline@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

?>


 // Set an array for errors
 $errors = array();

 // Validate the form data
 if (empty($name)) {
     $errors[] = "Name is required";
 }
 if (empty($lastname)) {
     $errors[] = "Last name is required";
 }
 if (empty($phone)) {
     $errors[] = "Phone is required";
 }
 if (empty($email)) {
     $errors[] = "Email is required";
 }
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
     $errors[] = "Invalid email format";
 }
 if (empty($schedule)) {
     $errors[] = "Schedule is required";
 }
 if (empty($country)) {
     $errors[] = "Country is required";
 }
 if (empty($visa)) {
     $errors[] = "Visa is required";
 }
 if (empty($date)) {
     $errors[] = "Date is required";
 }
 if (empty($time)) {
     $errors[] = "Time is required";
 }
 if (count($errors) == 0) {
 // Build the email message
 $to = "consultation@visionbeyondborder.com";
 $subject = "New Appointment Request";
 $message = "Name: $name $lastname\n";
 $message .= "Phone: $phone\n";
 $message .= "Email: $email\n";
 $message .= "Schedule: $schedule\n";
 $message .= "Country: $country\n";
 $message .= "Visa: $visa\n";
 $message .= "Date: $date\n";
 $message .= "Time: $time\n";


//redirect
header("Location:thank-you.html");

