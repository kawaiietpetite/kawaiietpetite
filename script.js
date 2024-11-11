// Open the side navigation
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

// Close the side navigation
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}  
// Generate QR code for Google Pay
function generateQRCode() {
    const gpayQRCode = 'swaroopa.v2020@okhdfcbank'; // Replace with actual UPI ID or payment URL
    const qrCodeElement = document.getElementById("gpay-qr");
    QRCode.toCanvas(qrCodeElement, gpayQRCode, { width: 200 }, function (error) {
        if (error) console.error(error);
        console.log('Google Pay QR code generated!');
    });
}

// Call the function to generate the QR code when the page loads
window.onload = generateQRCode;
