import React from 'react'
import CodeMirror from 'codemirror'
import CodeMirrorModeJavascript from 'codemirror/mode/javascript/javascript'
import CodeMirrorBaseStyle from 'codemirror/lib/codemirror.css'
import CodeMirrorThemeStyle from 'codemirror/theme/mbo.css'

class Demo extends React.Component {

    componentDidMount() {
        console.log(CodeMirror(this.refs.source, {
            mode: {
                name: 'javascript',
                json: true
            },
            theme: 'mbo',
            //lineNumbers: true,
            readOnly : true,
            value: JSON.stringify({
                store: {
                    book: [{
                        category: 'reference',
                        author: 'Nigel Rees',
                        title: 'Sayings of the Century',
                        price: 8.95,
                        bicycle: {
                            color: 'yellow',
                            price: 33.50
                        }
                    }, {
                        category: 'fiction',
                        author: 'Evelyn Waugh',
                        title: 'Sword of Honour',
                        price: 12.99
                    }, {
                        category: 'fiction',
                        author: 'Herman Melville',
                        title: 'Moby Dick',
                        isbn: '0-553-21311-3',
                        price: 8.99
                    }, {
                        category: 'fiction',
                        author: 'J. R. R. Tolkien',
                        title: 'The Lord of the Rings',
                        isbn: '0-395-19395-8',
                        price: 22.99
                    }],
                    bicycle: {
                        color: 'red',
                        price: 19.95
                    },
                    deep: {
                        bicycle: {
                            color: 'blue',
                            price: 10.99
                        }
                    }
                }
            }, null, 4)
        }));
    }

    render() {
        return(
            <div>
                <div ref="source" className="source"></div>
                <div id="result"></div>
            </div>
        )
    }

}

export default Demo