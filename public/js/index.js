const msgs = [
    {
        type: 'browser',
        msg: 'Hey Server 👋'
    },
    {
        type: 'server',
        msg: 'Hey Browser 👋'
    },
    {
        type: 'browser',
        msg: 'Got a quick one for ya 😅'
    },
    {
        type: 'server',
        msg: 'Sure 👍'
    },
    {
        type: 'server',
        msg: 'Fire away 🔫'
    },
    {
        type: 'browser',
        msg: 'Jus\' a sec 🕥'
    },
    {
        type: 'server',
        msg: 'OK 👌'
    },
    {
        type: 'server',
        msg: 'You still there??You still there??You still there??You still there??You still there??You still there??You still there??You still there??You still there??You still there??'
    },
    {
        type: 'server',
        msg: 'Ughh 😞'
    }
];

let el_chat = document.querySelector('.chat');
let el_input = document.querySelector('#input');
let el_wait = document.querySelector('.message--typing');

function setMsg({type='server', msg='test append message'}) {
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div.className = `message message--${type} hide`
    div2.className = 'message__content'
    div2.textContent = msg
    div.appendChild(div2)
    return [div, div2]
}

function setStyle(doms){
    doms[1].style.transition = 'transform 300ms'
    doms[1].style.transform = 'translateX(0) scale(1)'
}

//增加一条聊天内容
function appendMsg({type='server', msg='test append message'}) {
    let doms = setMsg({type, msg})
    el_chat.insertBefore(doms[0], el_wait)
    let translateX = window.innerWidth / 2 - doms[1].clientWidth / 2
    doms[1].style.transform = `translateX(${type==='server'?'-':''}${translateX}px) scale(0.2)`
    doms[0].className = `message message--${type}`
    setTimeout(() => {
        setStyle(doms)
    },10)
}

el_input.addEventListener('keydown', evt => {
    if(evt.keyCode === 13){
        if(el_input.value) {
            el_wait.style.display = 'block';
            setTimeout(() => {
                appendMsg({msg: el_input.value});
                el_wait.style.display = 'none';
            }, 1000);
        }
    }
});

function ofHandler(item, index, context) {
    return new Promise((resolve, reject) => {
        appendMsg(item);
        setTimeout(() => {
            resolve(`ofItemHandler result: ${item}`)
        }, 1300)
    })
}

async function forOf(arr, callback) {
    if (typeof callback !== 'function') throw new Error(`callback should be function!`);
    for (let [index, item] of Object.entries(arr)) {
        await callback(item, index, arr)
    }
    return 200;
}

forOf(msgs, ofHandler).then(d => console.log(d)).catch(e => console.warn(e))