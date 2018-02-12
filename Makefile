FILES=manifest.json linkfix.js

gsearch-urlfix.xpi: ${FILES}
	zip -r -FS gsearch-urlfix.xpi ${FILES}

clean:
	rm gsearch-urlfix.xpi
