import http from 'k6/http';

export const options = {
    stages: [
    { duration: '2m', target: 2500 }, //scale up to 2500 users in 2 mins
    { duration: '30s', target: 2500 } //stay at 2500 users for 30 secs
]
};

export default function () {
    http.get('http://localhost:5000/asyncfoo');
    //http.get('http://localhost:5000/syncfoo');
}