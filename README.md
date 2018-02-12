# Google Search URL Fixup

Google Search URL Fixup is a Firefox WebExtensions addon that undoes the mangling of search result URLs that Google does in circumstances that most people will not run into.

Google Search has two forms of search results pages, one that's normally served to people with JavaScript and one that's served to people who have it turned off, for example through the use of [uMatrix](https://github.com/gorhill/uMatrix); you can read more details about this in my blog article [Reverse engineering some settings for Google Search](https://utcc.utoronto.ca/~cks/space/blog/web/GoogleSearchSettings). I happen to prefer the no-JavaScript version, but this version has the drawback that Google mangles the URLs of search results to be indirected through Google (with tracking identifiers, of course). This addon reverses that mangling, giving you original URLs in the JS-free search results.

This addon has not been submitted to AMO, so you need a Developer or Nightly Firefox with the appropriate config option set to enable unsigned extensions. If there's sufficient interest, I will submit it to AMO to fix that.

## Known limitations and potential bugs

* It currently only works on www.google.com and www.google.ca, because those are the only two Google search domains I wind up on.
* The URL-demangling may not work properly for URLs that contain odd characters. Google percent-encodes the URLs and I percent-decode them, but it's possible they need to be partially re-encoded under some circumstances to escape some characters again.
* There's no icon. I've looked through the [Google Material Design iconset](http://google.github.io/material-design-icons/), which is where Mozilla took their icon for [Your first extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension), but nothing jumped out at me as particularly compellingly right.
