export function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

export function setCookie(name, value, hours) {
    var d = new Date();
    d.setTime(d.getTime() + hours*60*60*1000);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

export function deleteCookie(name) { setCookie(name, '', -1); }
