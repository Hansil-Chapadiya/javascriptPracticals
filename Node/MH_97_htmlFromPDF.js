const puppeteer = require('puppeteer');

async function createPDFFromHTML() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Encode the URL to handle special characters or spaces
    const url =  ('E:\\javascript\\Tutorials\\Node\\MH_97_index.html');

    await page.goto(url, { waitUntil: 'networkidle0' });

    // Generate a PDF from the HTML content
    await page.pdf({ path: 'output1.pdf', format: 'A4' });

    await browser.close();

    console.log('PDF created and saved successfully.');
}

createPDFFromHTML();
