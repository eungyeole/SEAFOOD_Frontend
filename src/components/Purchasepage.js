const React = require('react');
const { useEffect } = require('react');
const { useState, useRef, memo } = React;
const axios = require('axios');
require('../scss/app.scoped.scss');
let data = JSON.stringify({"password":"1234"});
function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(window.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
const Purchasepage = memo( () => {
    const [productdata, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const id=getParameter("id");
    const callapi=(id)=>{
        var config = {
            method: 'get',
            url: `http://127.0.0.1:5000/search?id=${id}`,
            headers: { 
            'Content-Type': 'application/json'
            },
            data : data
        }; 
        setLoading(true);
        setData(null);
        axios(config)
        .then(function (response) {
            setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        setLoading(false);
    }
    useEffect(()=>{
        callapi(id);
    },[]);

    return (
        <> 
            <div></div>
        </>
    );
});

module.exports = Purchasepage;