FROM cypress/included:9.4.1
WORKDIR /laserHub-Challenge
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "test" ]