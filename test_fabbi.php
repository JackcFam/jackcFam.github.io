<?php
//bài 2
function maximum_sum($array=array()){
    $result = '';
    $n = count($array);
    for($i=0; $i<$n; $i++){
        for($j=0; $j<=$i; $j++){
            if($array[$j] > $array[$i]){
                $array[$i] = $array[$i] + $array[$j];
                $array[$j] = $array[$i] - $array[$j];
                $array[$i] = $array[$i] - $array[$j];
            }
        }
    }

    $result = $array[$n] + $array[$n-1];

    return $result;
}

//bài 1
function sort_array($array=array()) {
    $result = array();
    $new_array = array_chunk($array,3);
    $m = 1;
   foreach($new_array as $array){
        foreach($array as $new){
            array_push($new[$m]);
        }
        $m++;
   }

   return $result;

}
//bài 3
function sort_arr() {

}
//bài này em mới nghĩ ra: là sắp xếp các lại mảng xong tìm khoảng cách nhỏ nhất giữa 2 phần tử. e chưa kịp làm
