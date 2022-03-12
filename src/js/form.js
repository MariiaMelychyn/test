// function formToAjax(){
// 	for(i=0,len=document.forms.length;i<len;i++)
// 	document.forms[i].onsubmit=function(e){
// 	var dani='';
// 	for(a=0,b=this.elements.length;a<b;a++){
// 	if(this.elements[a].hasAttribute('name')==true)
// 		switch(this.elements[a].getAttribute('type')){
// 		case 'radio':
// 		case 'checkbox':
// 			if(this.elements[a].checked==false)continue;
// 		default:
// 			dani+=(dani==''?'':'&')+this.elements[a].getAttribute('name')+'='+this.elements[a].value;
// 		break;
// 	}
// 	}
// 	var xhr = new XMLHttpRequest(), method=this.getAttribute('method'), url=this.getAttribute('action');
// 	xhr.form=this;
// 	if(method==null)method='get';
// 	method=method.toLowerCase();
// 	if(url==null)url='';
// 	if(method=='get')url+=(url.indexOf('?')==-1?'?'+dani:'&'+dani);
// 	xhr.open(method,url,true);
// 	if(method=="post")xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 	xhr.onreadystatechange=function(){
// 		if(this.readyState==4 && this.status==200){
// 		if(this.form.onload)this.form.onload( this.responseText );
// 	}
// 	}
// 	xhr.send((method=='get'?null:dani));
// 	return false;
// 	}
// }

// window.addEventListener('load',formToAjax);


const btn = document.querySelector('button');

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  // Turn the data object into an array of URL-encoded key/value pairs.
  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  // Define what happens on successful data submission
  XHR.addEventListener( 'load', function(event) {
    alert( 'Yeah! Data sent and response loaded.' );
  } );

  // Define what happens in case of error
  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  // Set up our request
  XHR.open( 'POST', 'https://example.com/cors.php' );

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // Finally, send our data.
  XHR.send( urlEncodedData );
}

btn.addEventListener( 'click', function() {
  sendData( {test:'ok'} );
} )