# openmct-performance
A collection of patterns, tests and associated infrastructure to test openmct when used as a frontend to a HTTP and WS-based telemetry source

## Installation

The following stages will get you started with this repo. Changes will obviously be necessary to adapt the tests to other telemetry sources.
### Pre-reqs
You will need `docker` and `npm` in order to use this repo.
### Quickstart the quickstart
1. In another terminal and directory, `git clone https://github.com/unlikelyzero/quickstart/` to pull the fork with prometheus configured
1. `git checkout yamcs-prometheus` to pull the branch with prometheus configured
1. `cd docker`
1. `make all` to leave the yamcs quickstart stack running with real-time data

### Quickstart this repo
1. In another terminal, cd into this directory
1. Install openmct-quickstart, `cd quickstart && docker compose -f openmct-yamcs-compose.yaml up -d`
1. To start monitoring stack, `cd monitoring && docker compose -f docker-compose.yaml up -d`
### Install k6 and k6-browser
1. Install the k6 binaries. `i.e. brew install k6`
1. `cd tests`
1. `npm install`

## Running the Tests

### 

## Writing a k6-browser test
The easiest way to write a k6-browser test is to use playwright's test recorder.

1. `npm run test:record` to open up a Playwright inspector window.
1. 

# Resources
The following is an unsorted list of links which served as inspiration for this repo.
- https://github.com/grafana/xk6-output-prometheus-remote
- https://github.com/grafana/har-to-k6
- https://github.com/ticup/xk6-browser-template-typescript-playwright
- https://k6.io/docs/using-k6/k6-options/reference/#include-system-env-vars
- https://github.com/szkiba/xk6-dotenv
