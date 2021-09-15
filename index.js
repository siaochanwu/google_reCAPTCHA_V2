function verify() {
    var formData = new FormData();
    formData.append('token', token);
        
    // Google Apps Script 部署為網路應用程式後取得的 URL
    var uriGAS = "https://script.google.com/macros/s/AKfycbxJOgOXrxs08GlO3vNxCE69BC2zjtmWeAjlOfGp7HqSWezkzbp80mis8UmLCBkqR-gA/exec";
        
    fetch(uriGAS, {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(result => {
        if(result.success) {
            // 後端驗證成功，success 會是 true
            // 這邊寫驗證成功後要做的事
        } else {
            // success 為 false 時，代表驗證失敗，error-codes 會告知原因
            window.alert(result['error-codes'][0])
        }
        })
        .catch(err => {
            window.alert(err)
        })
}