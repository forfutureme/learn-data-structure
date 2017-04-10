/**
 * Created by huweijian on 2017/4/9.
 * @title
 */
let fs = require('fs');
let path = require('path');

function readCode(type) {
    console.log(type);
    let url = path.resolve(`./makeData/readCodeText/code/${type}.js`);
    let end = {
        meta: {
            error: 200,
            msg: 'ok'
        },
        result: {

        }

    };

    try {
        let text = fs.readFileSync(url, 'utf-8');
        text = text
            // .replace(/\/\*\*/, '') //去掉最上面的注释
            // .replace(/\*.*/g, '') //去掉最上面的注释
            .replace(/\*\*/, '**<br>&nbsp;&nbsp;')
            .replace(/[\s]{2}/g, '--') //替换\s
            .replace(/(-{2,})/g, '<br>$1') //换行
            .replace(/<br>-{2,}/, '') //清理多余
            .replace(/\n/g, '<br>') //替换回车位换行
            .replace(/^<br>/, '') //去掉顶部换行
            .replace(/--/g, '&nbsp;&nbsp;')  //替换--为空格
            .replace(/(&nbsp;){2}?=(import)/, '')  //对齐import
            .replace(/\*\/<br>&nbsp;&nbsp;/, '*/<br>')   //对齐import
            .replace(/(export|default|class|this|null|if|else|let|while|try|catch|return|console|import|from|new)\b/g,
                '<span class="reserved-word" style="color: #C41A16; font-weight: 700;">$1</span>') //高亮保留字
            .replace(/\.(\w+)/g, '.<span class="attribute" style="color: #994500;">$1</span>')
            .replace(/(constructor)/g, '<span class="attribute" style="color: #994500;">$1</span>') //高亮属性
            .replace(/(\w+)(\(.*?\))/g, '<span class="attribute" style="color: #994500; font-weight: 700">$1</span>$2') //高亮方法属性
            .replace(/'(\w+)'/g, '<span class="compare" style="color: #3ad900;">\'$1\'</span>'); //高亮相等判断

        text = text.split(/\/(\*){10,}\//);
        text.map((item, i) => {
           if (item == '*'){
               text.splice(i, 1);
           }
        });

        end.result = {
            text
        }

    } catch (ex) {
        end.meta = {
            error: 444,
            msg: `${ex}`
        }
    }


    return end;
}

module.exports = readCode;
readCode();
