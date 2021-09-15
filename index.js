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