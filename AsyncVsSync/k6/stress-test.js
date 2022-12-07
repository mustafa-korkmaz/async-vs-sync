import http from 'k6/http';

export const options = {
    stages: [{
            duration: '2m', //scale up to 2500 users in 2 mins
            target: 2500
        },
        {
            duration: '30s', //stay at 2500 users for 30 secs
            target: 2500
        }
    ],
};

export default function () {
    http.get('http://localhost:5000/asyncfoo');
    //http.get('http://localhost:5000/syncfoo');
}