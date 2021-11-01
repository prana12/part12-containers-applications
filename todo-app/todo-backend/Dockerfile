FROM node:16
WORKDIR /usr/src/app
COPY --chown=node:node . .
#EXPOSE 3000
RUN npm ci
ENV DEBUG=todo-backend:*
USER node
CMD npm start