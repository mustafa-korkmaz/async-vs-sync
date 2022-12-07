import http from 'k6/http';

export const options = {
    stages: [{
        duration: '30s', //spike to 2500 users in 30 secs
        target: 2500
    },
     {
        duration: '90s', //stay at 2500 users for 1.5 mins
        target: 2500
    }, 
    {
        duration: '30s', //scale down to 1000 users
        target: 1000
    }, 
],
};

export default function () {
    http.get('http://localhost:5000/asyncfoo');
    //http.get('http://localhost:5000/syncfoo');
}