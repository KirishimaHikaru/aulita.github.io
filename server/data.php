<?php
//Validasi anti injeksi
function inputData($data){
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $eventname = $eventdate = $eventscope = $eventform = $eventdescription = "-";

   $eventname = inputData($_POST['nameEvent']);
   $eventdate = inputData($_POST['dateEvent']);
   $eventscope = inputData($_POST['eventScope']);
   $eventform = inputData($_POST['eventForm']);
   $eventdescription = inputData(nl2br($_POST['eventDescription']));
   
   $arrData= array(
      "Nama Event"=>$eventname,
      "Tanggal Event"=>$eventdate,
      "Lingkup Event"=> $eventscope,
      "Bentuk Event"=> $eventform,
      "Deskripsi Event"=> $eventdescription);
      
      $fileData = '../src/data/contribution.txt';
      $fl = fopen($fileData,'a+');
      $tulisFile = "\n--Data--\n".implode("\n", $arrData);
      fwrite($fl, $tulisFile);
      fclose($fl);
      
      header("Location: ../dashboard/contribution.html?popup=true");
      exit;
}
?>
