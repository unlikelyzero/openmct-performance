/*
 * Creator: Playwright 1.26.0
 * Browser: chromium 106.0.5249.30
 */

import { sleep } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  response = http.get('http://localhost:8040/', {
    headers: {
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/', {
    headers: {
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      'Cache-Control': 'max-age=0',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/node_modules/openmct/dist/openmct.js', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'script',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/openmct-yamcs.js', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'script',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/openmct-quickstart.js', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'script',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/node_modules/openmct/dist/espressoTheme.css', {
    headers: {
      Accept: 'text/css,*/*;q=0.1',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'style',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/yamcs/api/user/', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/yamcs/api/mdb/myproject/space-systems', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/node_modules/openmct/dist/generatorWorker.js', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'worker',
      'Sec-Fetch-Mode': 'same-origin',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/node_modules/openmct/dist/images/logo-openmct.svg', {
    headers: {
      Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/node_modules/openmct/dist/espressoTheme.css',
      'Sec-Fetch-Dest': 'image',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/node_modules/openmct/dist/fonts/Open-MCT-Symbols-16px.woff',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/node_modules/openmct/dist/espressoTheme.css',
        'Sec-Fetch-Dest': 'font',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?details=yes&limit=1000',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/node_modules/openmct/dist/favicons/favicon-32x32.png',
    {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/yamcs/api/mdb-overrides/myproject/realtime', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_all_docs?include_docs=true',
    '{"keys":["b873ef28-1359-4837-b969-9bf083e4aef9","8969269c-f7ef-49d9-bff9-1333ad27b6cc"]}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/node_modules/openmct/dist/favicons/favicon-32x32.png')

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"$and":[{"model.type":{"$eq":"annotation"}},{"model.tags":{"$elemMatch":{"$in":["46a62ad1-bb86-4f88-9a17-2a029e12669d","65f150ef-73b7-409a-b2e8-258cbd8b7323","f156b038-c605-46db-88a6-67cf2489a371"]}}}]}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)n"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=n&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=n&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)nu"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=nu&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=nu&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)num"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=num&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=num&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)numc"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=numc&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numc&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)numco"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=numco&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numco&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)numcom"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=numcom&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numcom&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)numcomm"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=numcomm&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numcomm&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)numcomma"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=numcomma&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numcomma&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)numcomman"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=numcomman&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numcomman&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)numcommand"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=numcommand&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numcommand&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.post(
    'http://localhost:8040/couchdb/openmct/_find',
    '{"selector":{"model":{"name":{"$regex":"(?i)numcommands"}}}}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Host: 'localhost:8040',
        Origin: 'http://localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/space-systems?q=numcommands&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/yamcs/api/mdb/myproject/parameters?q=numcommands&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  response = http.get(
    'http://localhost:8040/couchdb/openmct/4d61128c-a1b9-4cab-b029-c5e4fb4c1716',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"2-f36675732aff039af039e9469cd4db06"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get(
    'http://localhost:8040/couchdb/openmct/8969269c-f7ef-49d9-bff9-1333ad27b6cc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
        Connection: 'keep-alive',
        Host: 'localhost:8040',
        'If-None-Match': '"3-58504057b3b0e91a845221faf93af2d5"',
        Referer: 'http://localhost:8040/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    }
  )

  response = http.get('http://localhost:8040/couchdb/openmct/mine', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Authorization: 'Basic dGVzdHVzZXI6TmFzYUlzQ29vbCE=',
      Connection: 'keep-alive',
      Host: 'localhost:8040',
      'If-None-Match': '"3-76a2d1a1c21559b1d11b743005624bce"',
      Referer: 'http://localhost:8040/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Chromium";v="106"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
  })

  // Automatically added sleep
  sleep(1)
}
