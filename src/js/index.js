$(function () {
  /*
  * operateEle: 操作元素，
  * aimEle: 目标元素
  * className: 类名
  */
  function tabHanle(operateEle, aimEle, className) {
    $(operateEle).each(function (index) {
      $(this).mouseenter(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(aimEle)[index]).addClass(className).siblings().removeClass(className);
      });
    });
  }

  tabHanle('.r-nav li', '.wx-list .list-tab', 'active');
  tabHanle('.tab-head li', '.tab-cont .cont-item', 'active');
});