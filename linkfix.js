/*
 * Fix JS-free Google Search link mangling.
 */

let i = -1
const
	strippableParams = [
		"ei",
		"fbs",
		"sa",
		"sca_esv",
		"sca_upv",
		"source",
		"sxsrf",
		"ved",
	],
	links = document.links,
	fixLinks = () => {
		while (++i < links.length) {
			if (links[i].search === "" && links[i].host !== "www.google.com")
				continue

			switch (links[i].pathname) {
				case "/url":
					// Extract the search without the leading '?'.
					const q = new URLSearchParams(links[i].search.slice(1)).get("q")
					// note to self: must change href attribute, not the entire
					// thing. Doh. Read the docs, sort of.
					if (q !== null)
						links[i].href = decodeURIComponent(q)
				case "/":
				case "/maps":
				case "/preferences":
				case "/search":
				case "/setprefs":
				case "/travel":
				case "/webhp":
					const link = new URL(links[i].href)

					for (const param of strippableParams)
						link.searchParams.delete(param)

					links[i].href = link.toString()
			}
		}
	}

// Invoke on load.
fixLinks()

// Reinvoke on body change.
new MutationObserver(mutations => {
	for (const mutation of mutations)
		if (mutation.type === "childList" && mutation.addedNodes[1].id === "main")
			fixLinks()
}).observe(document.body, { __proto__: null, childList: true, subtree: true })
