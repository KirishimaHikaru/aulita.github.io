<?php
$users  = array(
   "maman"  => "maman314",
   "admin"  => "admin123"
);
$antibot = 32593;//anggap string ketika input:type='text'

if(isset($_POST['login'])){
   $usn = $_POST['usn'];
   $pwd = $_POST['pwd'];
   $cptch = $_POST['captcha'];
   

   if($cptch == $antibot){
      if(array_key_exists($usn, $users) && $users[$usn] === $pwd){
            header("Location: ../dashboard/dashboard.html");
            exit;
         }else{
            header("Location: ../login.html?errlogin=true");
            exit;
         }
   }else{
      header("Location: ../login.html?errcaptcha=true");
      exit;
   }
}else{
   echo "<center><h2>404 Page Not Found Yet!</h2></center>";
}
?>

