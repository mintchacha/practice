<?php

 $startdate = date("h:i:s", time());  // 오늘 날짜 시간 가져옴.
 $enddate = "18:00:00"; // 여기가 이벤트 마감일..
 $timediffer=strtotime($enddate) - strtotime($startdate);   // 마감일과 오늘의 날짜 차이를 구함
 $day = floor(($timediffer)/(60*60*24));
 $hour = floor(($timediffer-($day*60*60*24))/(60*60));
 $minute = floor(($timediffer-($day*60*60*24)-($hour*60*60))/(60));
 $second = $timediffer-($day*60*60*24)-($hour*60*60)-($minute*60);

echo "startdate :".$startdate;
echo "<br>";
echo "enddate :".$enddate;
echo "<br>";

echo $day."일d ". $hour. "시간 ". $minute. "분 ". $second. "초 남았습니다.";

?>