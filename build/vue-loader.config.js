/**
 * Created by huweijian on 2017/4/1.
 * @title
 */
module.exports = {
    preserveWhitespace: false,
    postcss: [
        require('autoprefixer')({
            browserslist: ['last 3 versions', 'Android', 'ChromeAndroid']
        })
    ]
}
