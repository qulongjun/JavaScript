window.onload = function() {
	var oUl = document.getElementById('navUl');
	var aLi = oUl.getElementsByTagName('li');
	var oContent = document.getElementById('content');
	var aDl = oContent.getElementsByTagName('dl');
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].onclick = function() {
			for (var j = 0; j < aLi.length; j++) {
				aLi[j].removeAttribute('class');
			}
			this.className = 'active';
		};
	}
	for (var i = 0; i < aDl.length; i++) {
		aDl[i].onmouseover = function() {
			var oDt = this.getElementsByTagName('img')[0];
			var iHid = this.getElementsByClassName('hid')[0];
			var iHidImg = this.getElementsByClassName('hidImg')[0];
			iHid.style.width = oDt.offsetWidth + 'px';
			iHid.style.height = oDt.offsetHeight + 'px';
			iHid.style.display = 'block';
			iHidImg.style.display = 'block';
		};
		aDl[i].onmouseout = function() {
			var iHid = this.getElementsByClassName('hid')[0];
			var iHidImg = this.getElementsByClassName('hidImg')[0];
			iHid.style.display = 'none';
			iHidImg.style.display = 'none';
		};
	}




};