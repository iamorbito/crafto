const text = `╭────────────────────────────╮
          🧾 CRAFTO E-BILL
╰────────────────────────────╯

Hello, ${"${customerName || 'Friend'}"}! 👋

📱 Phone : ${"${phone}"}
✉️ Email : ${"${email || 'Not provided'}"}

━━━━━━━━━━━━━━━━━━━━

🛒 ORDER SUMMARY

📦 Items Purchased : ${"${numItems}"}
💰 Total Paid      : ₹${"${finalTotal.toFixed(2)}"}

━━━━━━━━━━━━━━━━━━━━

🛍️ PRODUCTS

${"${productDescriptions}"}
━━━━━━━━━━━━━━━━━━━━

🌱 ECO IMPACT

🍃 By choosing a digital receipt,
you helped save approximately

        🌍 20g CO₂e

Every small step makes a difference.
Thank you for choosing a greener future. 💚

━━━━━━━━━━━━━━━━━━━━

📄 Receipt ID : #${"${billId}"}
📅 Date       : ${"${dateStr}"}
🕒 Time       : ${"${timeStr}"}

━━━━━━━━━━━━━━━━━━━━

✨ Thank you for shopping with Crafto!

Need any help?
Simply reply to this message.

💚 Team Crafto`;

function unicodeEscape(str) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);
    // keep basic ascii intact, escape everything else
    if (code > 127) {
      return '\\u' + code.toString(16).padStart(4, '0');
    }
    return char;
  }).join('');
}

console.log(unicodeEscape(text));
