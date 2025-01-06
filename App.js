const parent = React.createElement('div',{id: 'parent'}, 
    [React.createElement('div',{id: 'child'}, [
        React.createElement('h1',{}, 'This is H1 Tag'),
        React.createElement('h2',{}, 'This is H1 Tag')
    ]),
    React.createElement('div',{id: 'child'}, [
            React.createElement('h1',{}, 'This is H1 Tag'),
            React.createElement('h2',{}, 'This is H1 Tag')
        ])
    ])

// const heading = React.createElement("h1",{},"Hello React")

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)