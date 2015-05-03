FROM node:0.12.2

RUN npm install -g npm
RUN npm install n -g
RUN n stable

RUN mkdir -p /var/app/current
COPY package.json /var/app/current/
WORKDIR /var/app/current

RUN npm install --production

COPY . /var/app/current/

RUN useradd ns
RUN chown -R ns .

ENTRYPOINT ["node", "src/server"]

EXPOSE 80