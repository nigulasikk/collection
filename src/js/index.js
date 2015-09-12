
$(document).on("click",".item",function(){
	window.location.href="detail.html?lot="+$(this).attr("lot");

});

$(document).on("click",".show-img",function(){
	window.location.href="imgdetail.html?imgid="+$(this).attr("imgid");


});



$(".close-back").click(function(){
	window.history.go(-1);
});

function renderDetail(lotid){

	$.getJSON("../img/cangpin.json",function(datawrap){
		var thisPic=datawrap.pictures[lotid-1];
		var thisPicDetail=datawrap.pictures[lotid-1].detail;

		$("#description-info").text(thisPic.description);
	$("#title").text(thisPic.title);
	var detaiImgListHtml="";
	for(var i=0;i<thisPicDetail.length;i++){
		detaiImgListHtml+=getImg(thisPicDetail[i]);
	}
	$(".img-list").append(detaiImgListHtml);
	});


	

}
function getImg(imgname){
	return '<img style="margin-top:10px;" src="../img/detail/'+imgname+'" class="img-responsive show-img" imgid="'+imgname+'">';
}

function initIndexPage(){
	$.getJSON("../img/cangpin.json",function(datawrap){
		var picList=datawrap.pictures;
		$(".web-title").text(datawrap.webtitle);
		var indexHtml="";
		for(var i=0;i<datawrap.pictures.length;i++){
			indexHtml+=getItem(i+1,picList[i].description,picList[i].index,picList[i].size,picList[i].title);
		}
		$("#index-pic-list").append(indexHtml);
	});
}

function getItem(lot,description,pic,size,title){
	return '<div class="col-xs-6 animated flipInX item" lot="'+lot+'">'+
			'	<img src="../img/index/'+pic+'" class="img-responsive">'+
			'	<div class="text-left pin-introduce-title">'+
				title+
			'	</div>'+
			'	<div class="text-left pin-introduce-info">'+
			size+
			'		<br>'+
			description+
			'	</div>'+
			'</div>';
}

function RequestParameter(){
	var url = window.location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
		}
	}
	return theRequest;
	
}

