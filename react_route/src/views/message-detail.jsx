import React from "react";

const allMessages = [
    {id: 1, title: 'message001', content: '123'},
    {id: 3, title: 'message002', content: '1234'},
    {id: 5, title: 'message003', content: '12345'},
    {id: 7, title: 'message004', content: '123456'},
]

export default function MessageDetail(props) {
    //得到请求参数中的id
    const {id} = props.match.params
    //查询得到对应的message
    const message = allMessages.find((m) => m.id === id * 1)//返回第一个结果为true的数组元素
    return (
        <div>
            <ul>
                <li>ID:{message.id}</li>
                <li>TITLE:{message.title}</li>
                <li>CONTENT:{message.content}</li>
            </ul>
        </div>
    )
}