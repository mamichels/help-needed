const clipboardy = require('clipboardy');
const opn = require('open');
const iohook = require('iohook');

function getHelp() {
    try {
        const queryString = clipboardy.readSync().replace(' ', '+');
        const baseUrl = 'https://www.google.com/search?q=';

        (async () => {
            await opn(baseUrl + queryString);
        })();
    } catch (error) {
        console.error("Could not get any help.")
    }
}

iohook.registerShortcut([29, 42, 35], (keys) => {
    console.log('Shortcut called with keys:', keys)
    getHelp();
});


iohook.start();