/* JS Document */
/*****************************
copy  weixin  ID ,add weixin 
*****************************/
$(document).ready(function () {
    // Initialize Clipboard.js on elements with the class "copy_btn".
    // Note: You will need to change id="copy_btn" to class="copy_btn" in your HTML
    // and add a `data-clipboard-text` attribute with the WeChat ID.
    var clipboard = new Clipboard('.copy_btn', {
        text: function(trigger) {
            // return $(trigger).attr('data-clipboard-text') || 'weixin-id'; // Default to 'weixin-id' if no data attribute is found
            return $(trigger).attr('data-clipboard-text');

        }
    });

    clipboard.on('success', function (e) {
        // Give user clear instructions as opening WeChat via URL scheme is not reliable.
        alert("微信号 '" + e.text + "' 已复制成功！\n\n请打开微信,点击右上角"+"+"+"->"+"添加朋友"+"，粘贴微信号即可。");

        // Attempt to launch the WeChat application. This might not work on all browsers/devices,
        // but the message above provides a fallback.
        window.location.href = 'weixin://';
        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        alert('复制失败，请手动复制微信号: cloudsmi'); // Replace with your WeChat ID
    });
});
