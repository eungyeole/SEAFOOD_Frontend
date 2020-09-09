const React = require('react')
const { memo } = React

const App = require('./App')
const Login = require('./Login')
const Slide = require('./Slide')
const Productpage = require('./productpage');
const { BrowserRouter, Route, Switch } = require('react-router-dom');
const Purchasepage = require('./Purchasepage')

const Index = memo( () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/page" component={App} />
            <Route path="/purchasepage" component={Purchasepage}></Route>
        </BrowserRouter>
    )
});

module.exports = Index