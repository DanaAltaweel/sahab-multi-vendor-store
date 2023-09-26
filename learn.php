<?php
class Add{
   public $n1=3;
   public $n2=5;

   public function add(){
    return $this->n1+ $this->n2;
   }
}
$s1= new Add;
 echo $s1->add();

?>