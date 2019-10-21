<!DOCTYPE html>
<html lang="en">
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NLBMZBL');</script>
<!-- End Google Tag Manager -->
	<meta charset="UTF-8">
	<title>Test</title>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLBMZBL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	<h1 id="mytitle">
		Hello World!
	</h1>
	
<?php 
$to = "sashapawlow726@gmail.com";
$subject = "Письмо с сайта";
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
$msg = "Имя: ".$_POST["name"]."\n";$msg .= "Сообщение: ".$_POST["msg"]."\n";
mail($to, $subject, $msg, $headerss);
echo "qwerty";
?>
</body>
</html>