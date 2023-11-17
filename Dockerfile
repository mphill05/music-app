FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
COPY bun.lockb ./

RUN apt-get update && apt-get install -y \
  build-essential \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev

RUN npm install
RUN npm rebuild canvas --build-from-source
RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "dev"]