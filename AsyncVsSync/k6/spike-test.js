import http from 'k6/http';

export const options = {
    stages: [
    { duration: '30s', target: 2500 }, //spike to 2500 users in 30 secs  
    { duration: '90s', target: 2500 }, //stay at 2500 users for 1.5 mins
    { duration: '30s', target: 1000 }  //scale down to 1000 users
]
};

export default function () {
    http.get('http://localhost:5000/asyncfoo');
    //http.get('http://localhost:5000/syncfoo');
}