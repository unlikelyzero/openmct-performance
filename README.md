# Open MCT Performance Test Suite

This repository contains a suite of patterns, tests, and supporting infrastructure for evaluating the performance of [Open MCT](https://github.com/nasa/openmct) when it's used as a front end for HTTP and WS-based telemetry sources. It's designed to be used in conjunction with the [openmct-quickstart](https://github.com/scottbell/openmct-quickstart) repository.

## Installation

To set up your environment to use this test suite, follow these steps. 

### Prerequisites

Ensure that `docker` and `npm` are installed on your system.

### Setting Up Open MCT Quickstart
Open MCT Quickstart provides the capability of running Open MCT in a production-like configuration with a simple docker-compose up. We'll use it as the system-under-test for this repo.

1. Clone the openmct-quickstart repository in a separate directory:
   ```sh
   git clone https://github.com/scottbell/openmct-quickstart/
   ```
2. Start the provided YAMCS quickstart stack with real-time data:
   ```sh
   docker-compose up -d
   ```

### Installing k6 and k6-browser

1. Install the k6 binaries (for example, using Homebrew on macOS). [Official Guide](https://k6.io/docs/get-started/installation/)
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

To verify everything is up and running, use the k6 example testcase:
```sh
npm run test:example
```

Execute a browser-based test script using k6:
```sh
npm run test:example:browser
```

Run a combined test which may include browser-based and traditional k6 tests:
```sh
npm run test:example:combined
```

### YAMCS Search Test

Run a test specifically designed to search within YAMCS:
```sh
npm run test:yamcs:search
```

### YAMCS Search Test with Hybrid Traffic

Perform a YAMCS search test that includes custom marks for tracking performance.
```sh
npm run test:yamcs:searchWithMarks
```

## Writing k6-browser Tests

The recommended approach for creating k6-browser tests is to use the Playwright test recorder, ensuring compatibility by pinning to a specific version of the tool that supports our APIs.

1. Start the Playwright inspector to record a test:
   ```sh
   npm run test:record
   ```
2. Click the `[ Record ]` button in the Playwright Inspector window.
3. Perform the actions of the test you wish to record.
4. When finished, choose the 'Library' option in the Playwright Inspector window to export the test.

## (Advanced) Writing a har-based test from browser test

Since we're using playwright-like APIs, it's possible to use the playwright sdk to write tests to execute as a k6-browser test. 


1. Record HAR File of a interactive browser test
Record network activity in a HAR file while interacting with Open MCT.

```sh
npm run har:record
```

2. Convert HAR to k6 Test

Convert the recorded HAR file to a k6 test script.

```sh
npm run har:convert
```

3. YAMCS Search Test From HAR File

Run a YAMCS search test that has been created from a HAR file recording.

```sh
npm run test:yamcs:searchfromhar
```

## Resources

Below is a curated list of resources that have provided inspiration and information for this repository:

- [grafana quickpizza](https://github.com/grafana/quickpizza)
- [har-to-k6](https://github.com/grafana/har-to-k6)
- [xk6-browser-template-typescript-playwright](https://github.com/ticup/xk6-browser-template-typescript-playwright)
- [k6 Options Reference](https://k6.io/docs/using-k6/k6-options/reference/#include-system-env-vars)
- [xk6-dotenv](https://github.com/szkiba/xk6-dotenv)
