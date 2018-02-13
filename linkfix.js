/*
 * Fix JS-free Google Search link mangling.
 */

function fixLinks() {
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
	if (links[i].pathname != "/url" || links[i].search == "") {
	    continue;
	}
	// Extract the search without the leading '?'.
	let q = links[i].search.slice(1);
	let qe = new URLSearchParams(q);
	if (qe.has("q")) {
	    let dec = decodeURIComponent(qe.get("q"));
	    // note to self: must change href attribute, not the entire
	    // thing. Doh. Read the docs, sort of.
	    links[i].href = dec;
	}
    }
}

// Invoke on load.
fixLinks();
