# openmct-yamcs-quickstart Dockerfile
FROM node:18

WORKDIR /app

# Clone the branch which overrides the hostname for the yamcs webpack proxy to 'yamcs' instead of '0.0.0.0'
RUN git clone -b docker-compose-quickstart https://github.com/akhenry/openmct-yamcs.git .

RUN npm install
RUN npm run build:example

EXPOSE 9000

CMD ["npm", "start"]
