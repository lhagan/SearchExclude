// SearchExclude.safariextension
// by Luke Hagan <lukehagan.com>
// created: 2011-12-31
// released under the MIT license (see LICENSE.md for details)

// based on a user script by JRice
// http://userscripts.org/scripts/show/9462

var regex = /experts-exchange\.com|ehow\.com|ehow\.co\.uk|answers\.yahoo\.com|ask\.com|plus\.google\.com|www\.w3schools\.com/g;
var list = document.getElementsByTagName('a');
for (i=0; i<list.length; i++) {
	var item = list[i];
  if(regex.test(item)) {
  	if (item.parentNode.parentNode.className == "rc") {
  	  item.parentNode.parentNode.style.display = 'none';
    }
	}
}
