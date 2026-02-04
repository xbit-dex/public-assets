(function() {
    const translations = {
        'en': {
            title: 'Access Restricted',
            msg: 'Access to this site is restricted in your current country. If you think this is a mistake, please contact support via '
        },
        'zh': {
            title: '访问受限',
            msg: '您当前所在的国家/地区无法访问此网站。如果您认为这是一个错误，请通过以下方式联系支持人员：'
        },
        'vi': {
            title: 'Truy cập bị hạn chế',
            msg: 'Truy cập vào trang web này bị hạn chế ở quốc gia hiện tại của bạn. Nếu bạn cho rằng đây là một lỗi, vui lòng liên hệ bộ phận hỗ trợ qua '
        },
        'es': {
            title: 'Acceso Restringido',
            msg: 'El acceso a este sitio está restringido en su país actual. Si cree que esto es un error, contacte al soporte en '
        },
        'fr': {
            title: 'Accès Restreint',
            msg: 'L\'accès à ce site est restreint dans votre pays actuel. Si vous pensez qu\'il s\'agit d\'une erreur, contactez le support via '
        },
    };

    // Get browser language (e.g., 'en-US' -> 'en')
    const userLangs = navigator.languages.map(i => i.split('-')[0])
    console.log("userLangs: ", userLangs)

    let selectedLang = ''
    for (var i = 0; i < userLangs.length; i++) {
        const userLang = userLangs[i]
        if (translations[userLang]) {
            const t = translations[userLang];
            document.getElementById('title').textContent = t.title;
            const msgElement = document.getElementById('msg').textContent = t.msg;
            selectedLang = userLang
            break;
        }
    }
    if (selectedLang) console.log("translated using selectedLang: ", selectedLang)
})();
