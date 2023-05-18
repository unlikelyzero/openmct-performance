/*
 * Creator: Playwright 1.26.0
 * Browser: chromium 106.0.5249.30
 */

import { sleep } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  response = http.get('http://localhost:9000/', {
    headers: {
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:9000',
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

  response = http.get('http://localhost:9000/node_modules/openmct/dist/openmct.js', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:9000',
      Referer: 'http://localhost:9000/',
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

  response = http.get('http://localhost:9000/openmct-yamcs-example.js', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:9000',
      Referer: 'http://localhost:9000/',
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

  response = http.get('http://localhost:9000/node_modules/openmct/dist/espressoTheme.css', {
    headers: {
      Accept: 'text/css,*/*;q=0.1',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:9000',
      Referer: 'http://localhost:9000/',
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

  response = http.get('http://localhost:9000/yamcs-proxy/api/user/', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:9000',
      Referer: 'http://localhost:9000/',
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

  response = http.get('http://localhost:9000/yamcs-proxy/api/mdb/myproject/space-systems', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:9000',
      Referer: 'http://localhost:9000/',
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

  response = http.get('http://localhost:9000/node_modules/openmct/dist/generatorWorker.js', {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:9000',
      Referer: 'http://localhost:9000/',
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

  response = http.get('http://localhost:9000/node_modules/openmct/dist/images/logo-openmct.svg', {
    headers: {
      Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'localhost:9000',
      Referer: 'http://localhost:9000/node_modules/openmct/dist/espressoTheme.css',
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
    'http://localhost:9000/node_modules/openmct/dist/fonts/Open-MCT-Symbols-16px.woff',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'localhost:9000',
        Origin: 'http://localhost:9000',
        Referer: 'http://localhost:9000/node_modules/openmct/dist/espressoTheme.css',
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
    'http://localhost:9000/yamcs-proxy/api/mdb/myproject/parameters?details=yes&limit=1000',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'localhost:9000',
        Referer: 'http://localhost:9000/',
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
    'http://localhost:9000/node_modules/openmct/dist/favicons/favicon-32x32.png',
    {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'localhost:9000',
        Referer: 'http://localhost:9000/',
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

  response = http.get(
    'http://localhost:9000/node_modules/openmct/dist/favicons/favicon-32x32.png',
    {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'localhost:9000',
        'If-Modified-Since': 'Fri, 12 May 2023 06:17:31 GMT',
        'If-None-Match': 'W/"274-1880e9b7ff2"',
        Referer: 'http://localhost:9000/',
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

  response = http.get(
    'http://localhost:9000/yamcs-proxy/api/mdb/myproject/space-systems?q=tal&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'localhost:9000',
        Referer: 'http://localhost:9000/',
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
    'http://localhost:9000/yamcs-proxy/api/mdb/myproject/parameters?q=tal&searchMembers=true&details=false',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'localhost:9000',
        Referer: 'http://localhost:9000/',
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
    'http://localhost:9000/yamcs-proxy/api/archive/myproject/parameters/yamcs/f994d423b2b2/df/dev/vda1.total/samples?start=2023-05-12T08:24:38.919Z&stop=2023-05-12T08:54:38.920Z&count=766&order=asc',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'localhost:9000',
        Referer: 'http://localhost:9000/',
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
    'http://localhost:9000/yamcs-proxy/api/processors/myproject/realtime/parameters:batchGet',
    '{"id":[{"name":"/yamcs/f994d423b2b2/df/dev/vda1.total"}],"fromCache":true}',
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        'Content-Type': 'text/plain;charset=UTF-8',
        Host: 'localhost:9000',
        Origin: 'http://localhost:9000',
        Referer: 'http://localhost:9000/',
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
    'http://localhost:9000/node_modules/openmct/dist/favicons/favicon-32x32.png',
    {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'localhost:9000',
        'If-Modified-Since': 'Fri, 12 May 2023 06:17:31 GMT',
        'If-None-Match': 'W/"274-1880e9b7ff2"',
        Referer: 'http://localhost:9000/',
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

  // Automatically added sleep
  sleep(1)
}
