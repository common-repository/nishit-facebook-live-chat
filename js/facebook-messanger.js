window.fbAsyncInit = function() {
    FB.init({
      appId            : facebook_live_var.facebook_live_chat_appId,
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));