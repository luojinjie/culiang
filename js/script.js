window.onload = function(){
	var interTab = document.getElementById("interests-tab"),
	Tablis = interTab.getElementsByTagName("li"),
	interTabContent = document.getElementById("interests-tab-content"),
	TabContentlis = interTabContent.getElementsByTagName("li"),
	settleIn = document.getElementById("settle-in-list"),
	settleLis = settleIn.getElementsByTagName("li");

	//代理商权益——tab切换
	for(var i=0;i<Tablis.length;i++){
		Tablis[i].index = i;
		Tablis[i].onmouseover = function(){
			clearCls(Tablis,"active");
			this.className = "active";
			tabGo(this.index);
		}
		Tablis[i].onmouseout = function(){
			clearCls(Tablis,"active");
			this.className = "active";
		}
	}

	//地面商家、线上厂家入驻——div上浮显示/(隐藏)溢出的文本
	for(var i=0;i<settleLis.length;i++){
		settleLis[i].onmouseover = function(){
			var Div = this.getElementsByTagName("div")[0];
			textShowHide(Div,-40);
		}
		settleLis[i].onmouseout = function(){
			var Div = this.getElementsByTagName("div")[0];
			textShowHide(Div,200);
		}
	}
	function textShowHide(ele,target){
		clearInterval(ele.timer);
		ele.timer = setInterval(function(){
			var speed = (target-ele.offsetTop)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(ele.offsetTop==target){
				clearInterval(ele.timer);
			}else{
				ele.style.top = ele.offsetTop + speed +"px";
			}
		},30)
	}

	//清除className(清除样式)
	function clearCls(eles,cls){
		for(var i=0;i<eles.length;i++){
			eles[i].className = "";			
		}	
	}

	//tab切换函数
	function tabGo(index){
		for(var i=0;i<TabContentlis.length;i++){
			clearCls(TabContentlis,"active");
			TabContentlis[index].className = "active";
		}
	}
}