import http from 'k6/http';

export const options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 2000,
            timeUnit: '1m', // 1 iterations per minute, i.e. 2000 requests in total
            duration: '1m',
            preAllocatedVUs: 500, // how large the initial pool of VUs would be
            maxVUs: 500, // if the preAllocatedVUs are not enough, we can initialize more
        },
    },
};

export default function () {
    http.get('http://localhost:5555/syncfoo');
}
