// Simple QR Code generation for Google Pay (for demonstration purposes)
window.onload = function () {
    // Placeholder URL - replace with your actual Google Pay payment link
    const googlePayUrl = "https://pay.google.com/gp/p/ui/pay?tid=your-merchant-id&amount=299";
    
    // Generate the QR code dynamically
    QRCode.toCanvas(document.getElementById('gpay-qr'), googlePayUrl, function (error) {
      if (error) console.error(error);
      else console.log("QR Code successfully generated!");
    });
  };
// Open the side navigation
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

// Close the side navigation
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}  
