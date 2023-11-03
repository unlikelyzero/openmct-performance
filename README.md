# Open MCT Performance Test Suite

This repository contains a suite of patterns, tests, and supporting infrastructure for evaluating the performance of [Open MCT](https://github.com/nasa/openmct) when it's used as a front end for HTTP and WS-based telemetry sources. It's designed to be used in conjunction with the [openmct-quickstart](https://github.com/scottbell/openmct-quickstart) repository.

## Installation

To set up your environment to use this test suite, follow these steps. Note that you may need to make modifications to fit your specific telemetry source.

### Prerequisites

Ensure that `docker` and `npm` are installed on your system.

### Setting Up OpenMCT Quickstart

1. Clone the openmct-quickstart repository in a separate directory:
   ```sh
   git clone https://github.com/scottbell/openmct-quickstart/
   ```
2. Start the provided YAMCS quickstart stack with real-time data:
   ```sh
   docker-compose up -d
   ```

### Installing k6 and k6-browser

1. Install the k6 binaries (for example, using Homebrew on macOS):
   ```sh
   brew install k6
   ```
2. Navigate to the tests directory and install dependencies:
   ```sh
   cd tests
   npm install
   ```

### Verifying Installation

Check that the following services are available:

- Open MCT: [http://localhost:8040/](http://localhost:8040/)
- YAMCS: [http://localhost:8090/yamcs/](http://localhost:8090/yamcs/)
- CouchDB: [http://localhost:5984/couchdb/](http://localhost:5984/couchdb/)
- Prometheus: [http://localhost:9090/](http://localhost:9090/)
- Grafana: [http://localhost:3006/grafana](http://localhost:3006/grafana)

## Running the Tests

### Basic Example Test

```sh
npm run test:example
```

This script runs a basic test for 30 seconds with 10 virtual users.

### Browser-based Test Example

```sh
npm run test:example:browser
```

Execute a browser-based test script using k6.

### Combined Test

```sh
npm run test:example:combined
```

Run a combined test which may include browser-based and traditional k6 tests.

### YAMCS Search Test

```sh
npm run test:yamcs:search
```

Run a test specifically designed to search within YAMCS.

### YAMCS Search Test with Marks

```sh
npm run test:yamcs:searchWithMarks
```

Perform a YAMCS search test that includes custom marks for tracking performance.

All tests output their data to an experimental Prometheus remote-write endpoint.

## Writing a har-based test from browser test

1. Record Test with Playwright

```sh
npm run test:record
```

Launch the Playwright inspector for recording user interactions.

2. Record HAR File

```sh
npm run har:record
```

Record network activity in a HAR file while interacting with Open MCT.


3. Convert HAR to k6 Test

```sh
npm run har:convert
```

Convert the recorded HAR file to a k6 test script.

4. YAMCS Search Test From HAR File

```sh
npm run test:yamcs:searchfromhar
```

Run a YAMCS search test that has been created from a HAR file recording.


## Writing k6-browser Tests

The recommended approach for creating k6-browser tests is to use the Playwright test recorder, ensuring compatibility by pinning to a specific version of the tool that supports our APIs.

1. Start the Playwright inspector to record a test:
   ```sh
   npm run test:record
   ```
2. Click the `[ Record ]` button in the Playwright Inspector window.
3. Perform the actions of the test you wish to record.
4. When finished, choose the 'Library' option in the Playwright Inspector window to export the test.

## Resources

Below is a curated list of resources that have provided inspiration and information for this repository:

- [xk6-output-prometheus-remote](https://github.com/grafana/xk6-output-prometheus-remote)
- [har-to-k6](https://github.com/grafana/har-to-k6)
- [xk6-browser-template-typescript-playwright](https://github.com/ticup/xk6-browser-template-typescript-playwright)
- [k6 Options Reference](https://k6.io/docs/using-k6/k6-options/reference/#include-system-env-vars)
- [xk6-dotenv](https://github.com/szkiba/xk6-dotenv)
