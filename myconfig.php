<?php
$siteurl = "https://southcityopticals.com/";
$mysqli = new mysqli("localhost", "southcityoptical_southcityoptica", 'H0JqirbvT!Iv', 'southcityoptical_southcity');
$deliverytoken = 'd0b3283f78db431bb27aa218b3213ec3fa47ca1c';

$hdfc_redirect_url = $siteurl . "hdfc/ccavResponseHandler.php";
$hdfc_cancel_url = $siteurl . "hdfc/ccavResponseHandler.php";

$_SESSION['currency'] = '₹';
define('EMAIL', 'info@southcityopticals.com');
date_default_timezone_set('Asia/Kolkata');


function checkemail($email)
{
	global $mysqli;
	$email = $mysqli->real_escape_string(trim($email));
	$stmt = $mysqli->prepare("SELECT * FROM tbl_customers WHERE b_email= ? ");
	$stmt->bind_param('s', $email);
	$stmt->execute();
	$stmt->store_result();
	if ($stmt->num_rows > 0) {
		return 1;
	} else {
		return 0;
	}

}


function getRemaingPointByCustomerId($customer_id)
{
	global $mysqli;

	$sql = "select sum(credits) as totalcredit from tbl_credits where credit_type_used = 'Add'  and customer_id = " . $customer_id;
	$query = $mysqli->query($sql);
	$rows = mysqli_fetch_assoc($query);
	$total_added_credit = $rows['totalcredit'];

	$sql = "select sum(credits) as totalcredit from tbl_credits where credit_type_used = 'Spend'  and customer_id = " . $customer_id;
	$query = $mysqli->query($sql);
	$rows = mysqli_fetch_assoc($query);
	$total_spend_credit = $rows['totalcredit'];
	$remaing_credits = $total_added_credit - $total_spend_credit;
	$creditarr['add'] = $total_added_credit;
	$creditarr['spend'] = $total_spend_credit;
	$creditarr['remaining'] = $remaing_credits;
	return $creditarr;



}
function checkwishlsitProduct($customer_id, $product_id)
{

	global $mysqli;

	$stmt = $mysqli->prepare("SELECT * FROM tbl_wishlist WHERE customer_id = ? and  product_id= ? ");
	$stmt->bind_param('ii', $customer_id, $product_id);
	$stmt->execute();
	$stmt->store_result();
	if ($stmt->num_rows > 0) {
		return 1;
	} else {
		return 0;
	}


}

function checkCustomerLogedIN()
{

	if ($_SESSION['tempid'] == '') {
		header("Location:logout.php");
		exit();

	}

}

function regsiterCustomer($b_firstname, $b_lastname, $b_address1, $b_address2, $b_city, $b_state, $b_country, $b_zipcode, $b_phone, $b_email, $tempid)
{
	global $mysqli;
	echo $admininfosql = "insert into tbl_customers set 
       
        b_firstname = '" . $b_firstname . "' ,
        b_lastname = '" . $b_lastname . "' ,
        b_address1 = '" . $b_address1 . "' ,
        b_address2 = '" . $b_address2 . "' ,
        b_city = '" . $b_city . "' ,
        b_state = '" . $b_state . "' ,
        b_country = '" . $b_country . "' ,
        b_zipcode = '" . $b_zipcode . "' ,
        b_phone = '" . $b_phone . "' ,
        b_email = '" . $b_email . "' ,
        tempid = '" . $tempid . "' ,
        status = 0 ,
        b_password = '" . md5($tempid) . "' 
       
        ";
	$mysqli->query($admininfosql);
	mysqli_insert_id($mysqli);

	$link = SITEURL . "active.php?rand=" . $tempid;

	$subject = "South City Opticals - " . $b_firstname;
	$mailhtml = '<p>Dear ' . ucwords(strtolower($b_firstname)) . ',</p>
<p><p>Thanks for Your Registration.Kindly Click on below link to activate your account.</p></p>
<p><a href="' . $link . '">Click Here to Activate Your Account</a></p>
<div align="left">
<p> <strong>Login Details</strong></p>
<p><strong>Email:</strong>' . $b_email . '</p>
<p><strong>Password:</strong>' . $tempid . '</p>

  <p>If you have any questions or need assistance, please don\'t hesitate to contact our customer support team at Info@southcityopticals.com or +91-7289000012</p>



<p>If you have any questions whatsoever regarding your order or payment, please let us know by replying to the email we have just sent you or by chatting with us on live chat. </p>
<p style="text-align:left;"><a href="https://tawk.to/chat/6521686c6fcfe87d54b77327/1hc57vr0l" target="_blank" style="font-size:18px; font-weight:700; color:#f00; border:solid 1px #f00; padding:8px 25px; border-radius:8px; display:inline-block; text-decoration:none;">CLICK TO CHAT ABOUT YOUR PAYMENT - 24 HOURS</a></p>

<p>Thank you for choosing South City Opticals. We appreciate your business and hope you enjoy your purchase.</p>
<p><strong>Best regards,<br>
Manager<br>
South City Opticals<br>
Shop No.206,Huda Market Sector-31<br>
+91-7289000012<br>
Southcityopticals.com<br>
</strong></p>';
	sendgridemail($subject, $b_email, $b_firstname, $mailhtml);


}
function checkActiveEmail($email)
{
	global $mysqli;
	$email = $mysqli->real_escape_string(trim($email));
	$stmt = $mysqli->prepare("SELECT * FROM tbl_customers WHERE status= 1 and b_email= ? ");
	$stmt->bind_param('s', $email);
	$stmt->execute();
	$stmt->store_result();
	if ($stmt->num_rows > 0) {
		return 1;
	} else {
		return 0;
	}

}
function checkemailByRandomid($rand)
{
	global $mysqli;

	$stmt = $mysqli->prepare("SELECT * FROM tbl_customers WHERE tempid = ? ");
	$stmt->bind_param('s', $rand);
	$stmt->execute();
	$stmt->store_result();
	if ($stmt->num_rows > 0) {
		return 1;
	} else {
		return 0;
	}

}

function sendOrderConfirmationSMS($name, $mobile, $ordernumber, $price)
{
	$curl = curl_init();

	curl_setopt_array(
		$curl,
		array(
			CURLOPT_URL => 'http://site.ping4sms.com/api/smsapi?key=4f6390a94d3464d414bc2d7ee37a1b88&route=2&sender=SCOPTL&number=' . $mobile . '&sms=%20Dear%20Sir%2FMam.%20We%20Have%20Received%20a%20payment%20of%20Rs.' . $price . '%20for%20Your%20order%20' . $ordernumber . '.%20Thank%20You%20For%20Choosing%20South%20City%20Opticals.&templateid=1207169718181641640',
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => '',
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => 'GET',
			CURLOPT_HTTPHEADER => array(
				'Cookie: ci_session=cnloj2hn08tirk05nkjkfofeldq887rr'
			),
		)
	);

	$response = curl_exec($curl);
	curl_close($curl);
	return $response;

}
function sendOrderConfirmation2SMS($name, $mobile, $product_type)
{
	$curl = curl_init();

	curl_setopt_array(
		$curl,
		array(
			CURLOPT_URL => 'http://site.ping4sms.com/api/smsapi?key=4f6390a94d3464d414bc2d7ee37a1b88&route=2&sender=SCOPTL&number=' . $mobile . '&sms=%20Dear%20' . $name . '.Your%20order%20for%20' . $product_type . '%20is%20confirmed.%20Thank%20you%20for%20choosing%20South%20City%20Opticals.&templateid=1207169718132448192',
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => '',
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => 'GET',
			CURLOPT_HTTPHEADER => array(
				'Cookie: ci_session=cnloj2hn08tirk05nkjkfofeldq887rr'
			),
		)
	);

	$response = curl_exec($curl);
	curl_close($curl);
	return $response;

}

function getCurlData($url)
{
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl, CURLOPT_TIMEOUT, 10);
	curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16");
	$curlData = curl_exec($curl);
	curl_close($curl);
	return $curlData;
}
function getClientIP()
{
	if (isset($_SERVER)) {

		if (isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
			return $_SERVER["HTTP_X_FORWARDED_FOR"];

		if (isset($_SERVER["HTTP_CLIENT_IP"]))
			return $_SERVER["HTTP_CLIENT_IP"];

		return $_SERVER["REMOTE_ADDR"];
	}

	if (getenv('HTTP_X_FORWARDED_FOR'))
		return getenv('HTTP_X_FORWARDED_FOR');

	if (getenv('HTTP_CLIENT_IP'))
		return getenv('HTTP_CLIENT_IP');
	return getenv('REMOTE_ADDR');
}

function xss_clean($data)
{

	global $mysqli;
	$data = $mysqli->real_escape_string(trim($data));
	$data = trim(htmlentities($data));

	$data = str_replace(array('&amp;', '&lt;', '&gt;'), array('&amp;amp;', '&amp;lt;', '&amp;gt;'), $data);
	$data = preg_replace('/(&#*\w+)[\x00-\x20]+;/u', '$1;', $data);
	$data = preg_replace('/(&#x*[0-9A-F]+);*/iu', '$1;', $data);
	$data = html_entity_decode($data, ENT_COMPAT, 'UTF-8');


	$data = preg_replace('#(<[^>]+?[\x00-\x20"\'])(?:on|xmlns)[^>]*+>#iu', '$1>', $data);


	$data = preg_replace('#([a-z]*)[\x00-\x20]*=[\x00-\x20]*([`\'"]*)[\x00-\x20]*j[\x00-\x20]*a[\x00-\x20]*v[\x00-\x20]*a[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:#iu', '$1=$2nojavascript...', $data);
	$data = preg_replace('#([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*v[\x00-\x20]*b[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:#iu', '$1=$2novbscript...', $data);
	$data = preg_replace('#([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*-moz-binding[\x00-\x20]*:#u', '$1=$2nomozbinding...', $data);


	$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?expression[\x00-\x20]*\([^>]*+>#i', '$1>', $data);
	$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?behaviour[\x00-\x20]*\([^>]*+>#i', '$1>', $data);
	$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:*[^>]*+>#iu', '$1>', $data);


	$data = preg_replace('#</*\w+:\w[^>]*+>#i', '', $data);

	do {

		$old_data = $data;
		$data = preg_replace('#</*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|i(?:frame|layer)|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*+>#i', '', $data);
	}
	while ($old_data !== $data);

	return strip_tags($data);
}



$ipaddress = '';
if (isset($_SERVER['HTTP_CLIENT_IP']))
	$ipaddress = $_SERVER['HTTP_CLIENT_IP'];
else if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
	$ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
else if (isset($_SERVER['HTTP_X_FORWARDED']))
	$ipaddress = $_SERVER['HTTP_X_FORWARDED'];
else if (isset($_SERVER['HTTP_FORWARDED_FOR']))
	$ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
else if (isset($_SERVER['HTTP_FORWARDED']))
	$ipaddress = $_SERVER['HTTP_FORWARDED'];
else if (isset($_SERVER['REMOTE_ADDR']))
	$ipaddress = $_SERVER['REMOTE_ADDR'];
else
	$ipaddress = 'UNKNOWN';


$ipaddressarr = explode(',', $ipaddress);
$ipaddress = $ipaddressarr[0];

function date_foramt($date)
{
	$dateformat = date('d M Y', strtotime($date));
	return $dateformat;
}


function getproduct_type($pid)
{
	global $mysqli;
	$sql = "select product_type from tbl_product where id=" . $pid;
	$query = $mysqli->query($sql);
	$rows = mysqli_fetch_assoc($query);
	$product_type = $rows['product_type'];
	if ($product_type == 'Lense') {
		$product_type = 'Contact-Lenses';
	}
	return $product_type;


}

function getCustomerDetailsByEmail($email)
{
	global $mysqli;
	$sql = "select * from tbl_customers where b_email = '" . $email . "' ";
	$query = $mysqli->query($sql);
	$rows = mysqli_fetch_assoc($query);
	return $rows;
}

function getCustomerDetailsByMobile($mobile)
{
	global $mysqli;
	$sql = "select * from tbl_customers where b_phone ='" . $mobile . "' ";
	$query = $mysqli->query($sql);
	$rows = mysqli_fetch_assoc($query);
	return $rows;
}

function getOrderByEmail($email)
{
	global $mysqli;
	$orderarr = array();
	$sql = "select * from tbl_order where b_email = '" . $email . "' order by id desc";
	$query = $mysqli->query($sql);
	while ($rows = mysqli_fetch_assoc($query)) {
		$orderarr[] = $rows;
	}
	return $orderarr;
}
function getCreditByCustomerID($customer_id)
{
	global $mysqli;
	$orderarr = array();
	$sql = "select * from tbl_credits where customer_id = '" . $customer_id . "' order by id desc";
	$query = $mysqli->query($sql);
	while ($rows = mysqli_fetch_assoc($query)) {
		$orderarr[] = $rows;
	}
	return $orderarr;
}

function getOrderDetailsByTempid($tempid)
{

	global $mysqli;

	$sql = "select * from tbl_order where tempid = '" . $tempid . "' ";
	$query = $mysqli->query($sql);
	$rows = mysqli_fetch_assoc($query);
	return $rows;

}

function getProductDetailsByTempid($tempid)
{

	global $mysqli;
	$orderarr = array();
	$sql = "select * from tbl_cart where tempid = '" . $tempid . "' ";
	$query = $mysqli->query($sql);
	while ($rows = mysqli_fetch_assoc($query)) {
		$orderarr[] = $rows;
	}
	return $orderarr;

}

?>