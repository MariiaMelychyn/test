function formToAjax(){
	for(i=0,len=document.forms.length;i<len;i++)
	document.forms[i].onsubmit=function(e){
	var dani='';
	for(a=0,b=this.elements.length;a<b;a++){
	if(this.elements[a].hasAttribute('name')==true)
		switch(this.elements[a].getAttribute('type')){
		case 'radio':
		case 'checkbox':
			if(this.elements[a].checked==false)continue;
		default:
			dani+=(dani==''?'':'&')+this.elements[a].getAttribute('name')+'='+this.elements[a].value;
		break;
	}
	}
	var xhr = new XMLHttpRequest(), method=this.getAttribute('method'), url=this.getAttribute('action');
	xhr.form=this;
	if(method==null)method='get';
	method=method.toLowerCase();
	if(url==null)url='';
	if(method=='get')url+=(url.indexOf('?')==-1?'?'+dani:'&'+dani);
	xhr.open(method,url,true);
	if(method=="post")xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
		if(this.form.onload)this.form.onload( this.responseText );
	}
	}
	xhr.send((method=='get'?null:dani));
	return false;
	}
}

window.addEventListener('load',formToAjax);

