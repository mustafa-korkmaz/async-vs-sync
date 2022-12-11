# async-vs-sync with k6
[k6](https://k6.io/) load tests against dotnet [minimal api](./AsyncVsSync/Program.cs) methods in order to show the differences between async and sync programming approach.  
Test results can be found [here](https://mustafakorkmaz.site/2022/12/k6-ile-async-vs-sync-programlama-karsilastirmasi/) with detailed explanation written in Turkish.

## [Stress test](./AsyncVsSync/k6/stress-test.js) results
### /syncfoo
```
k6 metrics 
http_req_failed................: 0.00%  ✓ 0	✗ 14127  
http_reqs......................: 14127  86.8/s 
graceful_stop..................: 12.7s 

task manager metrics 
max threads used	113 
max memory used		60MB
max CPU used		1.5% 
```
### /asyncfoo
```
k6 metrics 
http_req_failed................: 0.00%  ✓ 0	✗ 208505 
http_reqs......................: 208505 1381.3/s 
graceful_stop..................: 0.9s 

task manager metrics 
max threads used	66 
max memory used		320MB
max CPU used		50%
```
## [Spike test](./AsyncVsSync/k6/spike-test.js) results
### /syncfoo
```
k6 metrics 
http_req_failed................: 5.53%  ✓ 740	✗ 12640 
http_reqs......................: 13380  83.1/s 
graceful_stop..................: 12.1s 

task manager metrics 
max threads used	115 
max memory used		70MB
max CPU used		1.5% 
```
### /asyncfoo
```
k6 metrics 
http_req_failed................: 0.00%  ✓ 0	✗ 300827 
http_reqs......................: 300827 1998.4/s 
graceful_stop..................: 1.0s 

task manager metrics 
max threads used	63 
max memory used		427MB
max CPU used		54%
```
## [Constant rate test](./AsyncVsSync/k6/constant-rate-test.js) (2000/m) results
### /syncfoo
```
/syncfoo task manager metrics 
max threads used	74 
max memory used		30MB
max CPU used		1.6%
```
### /asyncfoo
```
/asyncfoo task manager metrics 
max threads used	29
max memory used		29MB
max CPU used		2.7%
```
