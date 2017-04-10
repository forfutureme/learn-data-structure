/**
 * Created by huweijian on 2017/1/16.
 * @title
 */
const fs = require('fs');
module.exports = function (data) {
    let files;
    let content = [];
    try {
        files = fs.readFileSync('list.txt', 'utf-8');
        console.log('files', files);
        if (files){
            let old = [];
            for (let i = 0, n = files.length; i < n; i++){
                old.push(files[i].text);
            }
            for (let j = 0, m = data.length; j < m; j++){
                if (~old.indexOf(data[j].text) != 0){
                    content.push(data[j]);
                }
            }
        }
        content.push(...data);

        console.log('content', content);
        //files = {...JSON.parse(files), ...data};
        fs.writeFileSync('list.txt', JSON.stringify(content), 'utf-8');

    } catch (err) {
        fs.writeFileSync('list.txt', JSON.stringify(data), 'utf-8');
    } finally {

    }



};
