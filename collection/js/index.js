function renderDetail(i){$.getJSON("../img/cangpin.json",function(t){var e=t.pictures[i-1],n=t.pictures[i-1].detail;$("#description-info").text(e.description),$("#title").text(e.title);for(var o="",c=0;c<n.length;c++)o+=getImg(n[c]);$(".img-list").append(o)})}function getImg(i){return'<img style="margin-top:10px;" src="../img/detail/'+i+'" class="img-responsive show-img" imgid="'+i+'">'}function initIndexPage(){$.getJSON("../img/cangpin.json",function(i){var t=i.pictures;$(".web-title").text(i.webtitle);for(var e="",n=0;n<i.pictures.length;n++)e+=getItem(n+1,t[n].description,t[n].index,t[n].size,t[n].title);$("#index-pic-list").append(e)})}function getItem(i,t,e,n,o){return'<div class="col-xs-6 animated flipInX item" lot="'+i+'">	<img src="../img/index/'+e+'" class="img-responsive">	<div class="text-left pin-introduce-title">'+o+'	</div>	<div class="text-left pin-introduce-info">'+n+"		<br>"+t+"	</div></div>"}function RequestParameter(){var i=window.location.search,t=new Object;if(-1!=i.indexOf("?"))for(var e=i.substr(1),n=e.split("&"),o=0;o<n.length;o++)t[n[o].split("=")[0]]=n[o].split("=")[1];return t}$(document).on("click",".item",function(){window.location.href="detail.html?lot="+$(this).attr("lot")}),$(document).on("click",".show-img",function(){window.location.href="imgdetail.html?imgid="+$(this).attr("imgid")}),$(".close-back").click(function(){window.history.go(-1)});