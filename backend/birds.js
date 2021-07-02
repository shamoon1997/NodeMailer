// let express = require('express');
// let router = express.Router();
// router.use(function printer(req, res, next) {
//     console.log('In middleware', Date.now());
//     next();
// });

// router.get('/birds', function (req, res) {
//     res.send('In birds get request');
// });
// router.post('/birds', function (req, res) {
//     console.log('In birds post request');
//     res.send('In birds get request');
// });
// module.exports = router;

function greeting({ message }) {
    return <h1>{`hello ${message}`}</h1>;
}

greeting('I love Lahore');

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>People of Pakistan</h1>
            </div>
        );
    }
}
