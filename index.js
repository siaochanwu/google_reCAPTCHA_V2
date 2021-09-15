function verify(token) {
    console.log('123')
    // 把 token 送到後端
    // var formData = new FormData();
    // formData.append('token', token);
        
    // Google Apps Script 部署為網路應用程式後取得的 URL
    var uriGAS = `https://script.google.com/macros/s/AKfycbxJOgOXrxs08GlO3vNxCE69BC2zjtmWeAjlOfGp7HqSWezkzbp80mis8UmLCBkqR-gA/exec?token=${token}`;
        
    fetch(uriGAS, {
        redirect: "follow",
        method: "GET",
        followAllRedirects: true,
    }).then(response => response.json())
        .then(result => {
        if(result.success) {
            console.log('ok')
            const submit = document.getElementById('verify')
            submit.classList.remove('hide');
            submit.textContent = 'verify ok';
        } else {
            window.alert(result['error-codes'][0])
        }
        })
        .catch(err => {
            window.alert(err)
        })
}

function expired(expired) {
    window.alert('驗證過期')
}

function error(error) {
    window.alert('驗證錯誤QQ')
}