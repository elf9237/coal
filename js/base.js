$(function($){
  //公用弹窗事件
  $(".s-modal .ok, .s-modal .cancle, .s-modal .close").click(function(){
    $(this).parents(".modalShade").removeClass("shown");
  })
  //表格全选
  $(".tableStyle th").find("input[type='checkbox']").click(function(){
    if($(this).prop("checked")) {
      $(this).parents(".tableStyle").find("td input[type='checkbox']").prop("checked", true);
    } else {
      $(this).parents(".tableStyle").find("td input[type='checkbox']").prop("checked", false);
    }
  })
  //用户中心(使用余额)页面，点击支持。查询余额显示
  $(".BalanceContent .queryMoney").click(function(){
    $(".balanceInfo").show();
  })

  //登录页点击记住密码
  $(".indexContent .rember").find("i").click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
    } else {
      $(this).addClass('on');
    }
  })
  //登录、注册点击x 情况输入框内容
  $(".field").children(".close").click(function(){
    $(this).siblings("input").val('');
  })
})

// 菜单点击事件
function initMenuEvent() {
  $(".leftContent dt").click(function(){
    var length = $(this).siblings('dd').length;
    $(".icon-more").removeClass("up");
    if(length > 0){
      if($(this).hasClass('in')) {
        $(this).removeClass("in");
        // $(this).siblings("dd").hide();
        $(this).find(".icon-more").removeClass('up');
      } else {
        $(this).addClass("in").parents("li").siblings().find("dt").removeClass("in").removeClass("on");
        // $(this).siblings("dd").show();
        $(this).find(".icon-more").addClass('up');
      }
    } else {
      $(".leftContent dd").removeClass("selected");
      $(this).addClass("on").parents("li").siblings().find("dt").removeClass("on").removeClass("in");

    }
  })
  $(".leftContent dd").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected").parents("li").siblings().find("dd").removeClass("selected");
    $(".leftContent dt").removeClass("on").removeClass("in");
    $(this).siblings("dt").addClass("in");
  })
}
//点击展开更多
function fillMoreInfo(){
  //添加供应压面  产品规格展开更多开关
  $(".switchStandard").click(function(e){
    if($(this).attr("checked") === 'checked') {
      $(this).attr("checked",false);
      $(".blockFour").hide();
    } else {
      $(this).attr("checked",true);
      $(".blockFour").show();

    }
  })
    //添加供应压面  设置区域价格开关
  $(".switchPrice").click(function(e){
    if($(this).attr("checked") === 'checked') {
      $(this).attr("checked",false);
      $(".areaOnePrice").hide();
      $(".selectArea").hide();
      $(".noSetArea").show();
    } else {
      $(this).attr("checked",true);
      $(".areaOnePrice").show();
      $(".selectArea").show();
      $(".noSetArea").hide();

    }
  })
}
// 煤产品列表页 加载更多筛选条件
function getMoreCondition() {
  $(".moreCondition").click(function(){
    if ($(".conditionList").find(".noShow").length > 0 ){
      $(".conditionList").find("li").removeClass("noShow");
      $(".conditionList").find("li").eq(4).removeClass("no-border");
    } else {
      $(".conditionList").find("li:gt(4)").addClass("noShow");
      $(".conditionList").find("li").eq(4).addClass("no-border");
    }
  })
}
//煤产品列表页，点击筛选条件
function selectCondition() {
  $(".conditionList dd, .conditionList dt").click(function(e){
    $(this).addClass("selected");
    if(e.target.tagName.toLowerCase() == 'dt'){
      $(this).siblings(".item").children("dd").removeClass("selected");
      var indexLi = $(this).parents("li").index();
      $(".selectCodition").find("li").each(function(index, item){
        if($(this).data("indexli") == indexLi) {
          $(this).remove();
        }
      })
      var value = $(this).text();
      var label = $(this).parents("dl").siblings("span").text();
      var ele = '<li data-indexLi="'+indexLi+'" data-index ="unlimited"><span>'+label+value+'</span><i class="icon-close"></i></li>';
      $(".selectCodition").find("ul").append(ele);
    } else {
      $(this).parents(".item").siblings("dt").removeClass("selected");
      $(this).siblings("dd").removeClass("selected");
      var indexLi = $(this).parents("li").index();
      $(".selectCodition").find("li").each(function(index, item){
        if($(this).data("indexli") == indexLi) {
          $(this).remove();
        }
      })
      var indexDt = $(this).index();
      var value = $(this).text();
      var label = $(this).parents("dl").siblings("span").text();
      var ele = '<li data-indexli="'+indexLi+'" data-indexdt ="'+indexDt+'"><span>'+label+value+'</span><i class="icon-close"></i></li>';
      $(".selectCodition").find("ul").append(ele);
    }
  })

  $(".selectCodition").delegate(".icon-close", "click", function(){
    var index_li = $(this).parents("li").data("indexli");
    var index_dt = $(this).parents("li").data("indexdt");
    if(index_dt == 'unlimited') {
      $(".conditionList ul").find("li").eq(index_li).find("dt").removeClass("selected");
    } else {
      $(".conditionList ul").find("li").eq(index_li).find("dd").eq(index_dt).removeClass("selected");
    }
    $(this).parents("li").remove();
  })
  //清空筛选条件
  $(".clearCondition").click(function(){
    $(".selectCodition dt,dd").removeClass("selected");
    $(".selectCodition").children('ul').html('');
  })
}

//tab过滤表格(煤产品列表)
function formatTabel(){
  $(".conditionResult .navTab li").click(function(){
    if($(this).index() == 1 ) {
      if(!$(this).hasClass("on")) {
        $(this).addClass("on").siblings().removeClass('on');
      } else {
        if($(this).hasClass("down")) {
          $(this).removeClass("down");
        } else{
          $(this).addClass("down");
        }
      }
    } else {
      $(this).addClass("on").siblings().removeClass('on');
    }
  })
  $(".conditionResult .navTab .btn-go").click(function(){
    $(this).addClass("on").siblings(".btn-go").removeClass('on');
  })
}

//选择地址 / 获取更多地址
function selectAddress() {
  $(".setttleAccounts .head").find("input").click(function(){
    $(this).parents("li").addClass("selected").siblings().removeClass("selected");
  })
  $(".moreAddress").click(function(){
    if($(this).hasClass("in")) {
      $(this).removeClass("in");
      $(".setttleAccounts .head").find("li:gt(1)").addClass("noShow");
      $(".moreAddress label").text("显示更多");
    } else {
      $(this).addClass("in");
      $(".setttleAccounts .head").find("li").removeClass("noShow");
      $(".moreAddress  label").text("收起地址");
    }
  })
}

// 选择付款银行/付款方式
function selectPay() {
  $(".selectPay>ul>li").click(function(){
    $(this).siblings("li").find("input").removeAttr("checked");
    $(this).find("input").prop("checked","checked");
    $(".otherPay>ul>li").removeClass("on");
  })
  $(".otherPay>ul>li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    $(".selectPay>ul>li").find("input").removeAttr("checked");
  })
}

function selectSellType(){
  //供应添加页面 点击销售类型选择 现货或者期货
  $(".blockOne").find("input[name='sellType']").click(function(){
    if($(this).val() === 'cashGoods'){  //cashGoods 为现货  futuresGoods为期货
      $(".blockTwo").addClass("noShow");
    } else {
      $(".blockTwo").removeClass("noShow");
    }
  })
  //添加供应页面。 产品价格  区域一，区域二勾选
  $(".selectArea input[name='selectArea']").click(function(){
    if($(this).prop("checked")) {
      if($(this).val() == 'area1') {
        $(".areaOnePrice").show();
      } else {
        $(".areaTwoPrice").show();
      }
    } else {
      if($(this).val() == 'area1') {
        $(".areaOnePrice").hide();
      } else {
        $(".areaTwoPrice").hide();
      }
    }
  })
}

//用户中心(结算页), 添加/编辑地址弹窗
function addAddress() {
  $(".setttleAccounts .addAddress, .setttleAccounts .editAddress, #addAddress, #editAddress").click(function(){
    $("#Adressfield").addClass("shown");
  })
}

//显示弹窗
function showDialog(eventDom, dialogDom){
  eventDom.click(function(){
      dialogDom.addClass("shown");
  })
}
//图片点击滑动
function ScrollOneImg(obj){
  var i=1;
  var length=obj.find(".belleScroll>ul>li").length;
  var _width=obj.find(".belleScroll>ul>li").width();
  var _left=0;
  obj.find(".belleScroll>ul").width(length*_width+10);
  obj.find(".bellePre").click(function(){
  	 if(i>1){
  	 	 _left=_left+_width;
  	 	 obj.find(".belleScroll>ul").animate({
  	 	 	left:_left
  	 	 })
  	 	 i--;
  	 }
  });
  obj.find(".belleNext").click(function(){
  	 if(i<length){
  	 	 _left=_left-_width;
  	 	 obj.find(".belleScroll>ul").animate({
  	 	 	left:_left
  	 	 })
  	 	 i++;
  	 }
  });
}
//点击收藏
function collectClick(){
  $(".productInformation .collect").click(function(){
    if($(this).find("i").hasClass("in")) {
      $(this).find("i").removeClass("in");
    } else {
      $(this).find("i").addClass("in");
    }
  })
}
//用户中心(收货地址) 点击设置默认地址
function setDefailAddress (){
  $(".setDefailAddress").click(function(){
    $(this).parents("tr").siblings("tr").find(".isDefail").text("设为默认地址");
    $(this).parents("tr").siblings("tr").find(".isDefail").removeClass("isDefail").addClass("colorC");
    $(this).addClass("isDefail").removeClass("colorC").text("默认地址");
  })
}
//验证码倒计时
function countDown () {
  $("#verificationCode").click(function(){
    if(!$(this).hasClass("down")){
      var num = 60;
      $("#verificationCode").html("重新发送(<i>"+num+"</i>)");
      $("#verificationCode").addClass("down");
      var time = setInterval(function(){
        num = num -1;
        if(num > 0) {
          $("#verificationCode").html("重新发送(<i>"+num+"</i>)");
        } else {
            $("#verificationCode").removeClass("down");
            $("#verificationCode").html("重新发送");
            clearInterval(time);
        }
      }, 1000);
    }
  })
}
//用户中心(仓库管理) 添加仓库选择配置地区
function selectDeliver(){
  $("#EntrepotDialog .selectAll").find("input[type='checkbox']").click(function(){
    if($(this).prop("checked")){
      $(this).parents(".selectAll").siblings("ul").find("li input[type='checkbox']").prop("checked", true);
    } else {
      $(this).parents(".selectAll").siblings("ul").find("li input[type='checkbox']").prop("checked", false);
    }
  })
}
//表格删除行
function batchDel () {
  $(".tableContent .batch-del").click(function(){
    var selectItems = $(this).parents(".operate").siblings(".tableStyle").find("td input[type='checkbox']:checked");
    selectItems.each(function(index,item){
      $(item).parents("tr").remove();
    })
    $(this).parents(".operate").siblings(".tableStyle").find("th input[type='checkbox']:checked").prop("checked", false);
  })
  $(".tableContent .del").click(function(){
    $(this).parents("tr").remove();
  })
}

//用户中心(出货统计) 选择天数条件
function tabClick (parentDom, clickDom) {
  parentDom.find(clickDom).click(function(){
    $(this).addClass('on').siblings().removeClass('on');
  })
}

//tab切换
function tab(){
  $("#tab").find("ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    var index = $(this).index();
    $(this).parent("ul").siblings(".tabContent").find(".containTab").eq(index).addClass("selected").siblings(".containTab").removeClass("selected");
  })
}

function addArea(){
  $(".add-area-sel-wrap").find("#district").change(function(){
    var area = $("#district").val();
    var isRepeat = false;
    $(".area-tips-alone").each(function(index, item) {
      if($(this).find($(".tips-title")).text() == area) {
        isRepeat = true;
      }
    })
    if(area == '' || isRepeat) return;
    var addDom = '<span class="area-tips-alone"><span class="tips-title">'+area+'</span><span class="close-btn">×</span></span>';
    $(".area-tips").append(addDom);
  })

  $(".area-tips").delegate('.close-btn', 'click',function(){
    $(this).parents(".area-tips-alone").remove();
  })
}

//用户中心(购物车) 全选 / 添加购买数量
function shoppingCarEvent () {
  $(".shoppingContent .headField, .settle").find("input[type='checkbox']").click(function(){
    var ischeck = $(this).prop("checked");
    if(ischeck){
      $(".shoppingCar").find("input[type='checkbox']").prop("checked",true);
    } else {
      $(".shoppingCar").find("input[type='checkbox']").prop("checked",false);
    }
  })
  $(".shoppingList").find("input[type='checkbox']").click(function(){
    var ischeck = $(this).prop("checked");
    if(ischeck){
      $(this).parents("dt").siblings("dd").find("input[type='checkbox']").prop("checked", true);
    } else {
      $(this).parents("dt").siblings("dd").find("input[type='checkbox']").prop("checked", false);
    }
  })
  $(".shoppingInfo .reduct").click(function(){
    var num = parseInt($(this).siblings("input").val());
    if(num > 0) {
      num -= 1;
    }
    $(this).siblings("input").val(num);
  })
  $(".shoppingInfo .add").click(function(){
    var num = parseInt($(this).siblings("input").val());
    $(this).siblings("input").val(num+1);
  })
}
initMenuEvent();
fillMoreInfo();
getMoreCondition();
selectCondition();
formatTabel();
selectAddress();
selectPay();
selectSellType();
addAddress();
collectClick();


$(function(){
  $('.enterprise-step ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $('.enterprise-body').children().eq(index).removeClass('hide').siblings().addClass('hide');
  });
})



