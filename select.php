<?php
header("Content-type: application/json; charset=ISO-8859-1");
include_once "dbConnect.php";

// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

  $nama = $_GET["nama_Packing"];
  $no_hp = $_GET['barang_Packing'];
  $sql = "SELECT * FROM packing";
  $query = mysqli_query($conn, $sql);

 
if ($conn->connect_error) {

 die("Connection failed: " . $conn->connect_error);
}

// Creating SQL command to fetch all records from Table.

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row[] = $result->fetch_assoc()) {
    $item = $row;
    $json = json_encode($item);
  }
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>


//<?php 
/*    header("Content-type: application/json; charset=ISO-8859-1");
    include_once "koneksi.php";
        $nama = $_GET["nama"];
        $sql = "select * from re_mhs where nama like '%$nama%'";
        $query = mysqli_query($koneksi, $sql);

        $arrmhs = array();
        while ($row = mysqli_fetch_array($query)){
            $arrmhs[] = $row;
        }
    echo json_encode($arrmhs );
    mysqli_close($konek);
 ?>*/
