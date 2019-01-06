const Form = (props) => {
    return React.createElement('form', { id: 'row-form'}, 
        React.createElement('div', { className: 'row form-group' },
            React.createElement('div', 
            { className: 'col p-4 text-center' },
            [
                React.createElement('input', 
                {
                    className: 'form-control text-center',
                    name: 'rowCount',
                    placeholder: 'Number of rows'
                }),
                React.createElement('button', 
                {
                    className: 'btn btn-success my-2',
                    type: 'submit'
                }, 'Submit')
            ])
        )
    );
};

ReactDOM.render(Form(), document.getElementById('app'));

$('#row-form').on('submit', function(event) {
    event.preventDefault();
    let data = $(this).serializeArray();
    let rows = data[0]['value'];
    let oddR = ['red', 'black'];
    let evenR = ['black', 'red'];
    
    const Cell = (props) => {
        let bgColor = props['bgColor'];
        return React.createElement('div', 
        {
            style: {
                backgroundColor: bgColor,
                width: '30px',
                height: '30px',
                display: 'inline-block'
            }
        })
    };

    
    const Row = (props) => {
        let rowCells = [];
        console.log(props);
        let colors = props['colors'];

        for (var i=0; i<rows; i++) {
            if (i % 2) {
                rowCells.push(Cell({ bgColor: colors[0] }));
            } else {
                rowCells.push(Cell({ bgColor: colors[1] }));
            };
        };

        return React.createElement('div', 
        { 
            className: 'mb-0 pb-0'
        }, 
        [ rowCells ]);
    };

    const Board = (props) => {
        let boardRows = [];

        for (var i=0; i<rows; i++) {
            if (i % 2) {
                boardRows.push(Row({ colors: oddR }));
            } else {
                boardRows.push(Row({ colors: evenR }));
            };
        };

        return React.createElement('div', { className: 'row' },
            React.createElement( 'div',
                { 
                    className: 'col text-center'
                }, 
                [ boardRows ]
            )
        );
    }

    ReactDOM.render([Form(), Board()], document.getElementById('app'));
});