;$(function()
{
   'use strict';
  /*根据div定义变量*/
  var sidebar = $('#sidebar'),//选择侧栏
  mask=$('.mask'),            //选择mask
  sidebar_trigger=$('#sidebar_trigger');  //选择li标签
  /*写两个方法，展示和隐藏侧栏*/
  function showSideBar()//点击滑出
  {
   mask.fadeIn();      //调用jquery的函数 
   sidebar.css('left',0);//控制离页面边部位置
  }
  function hideSideBar()
  {
   mask.fadeOut(); 
   sidebar.css('left',-sidebar.width());//位置控制取原来的负值
  }
  /*li标签和mask中click激发*/
  sidebar_trigger.on('click',showSideBar)
  mask.on('click',hideSideBar)
})