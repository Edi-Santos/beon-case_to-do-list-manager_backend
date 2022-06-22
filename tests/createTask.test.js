const chai = require('chai');
const chaiHTTP = require('chai-http');
const sinon = require('sinon');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/api/app');

chai.use(chaiHTTP);

const { expect } = chai;

describe('POST /tasks', () => {
  describe('Testa quando a requisição é bem sucedida', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      response = await chai.request(server)
        .post('/tasks')
        .send({
          "name": "Concluir o desafio técnico a tempo",
          "deadline": "1 dia",
          "status": "Pendente",
          "priority": "alta",
          "finished": "",
        });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    })

    it('retorna o código de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "newTasks"', () => {
      expect(response.body).to.have.property('newTask');
    });
  });

  describe('Testa quando a requisição NÂO é bem sucedida', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      response = await chai.request(server)
        .post('/tasks')
        .send({
          "name": "",
          "deadline": "",
          "status": "",
          "priority": "",
          "finished": "",
        });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    })

    it('retorna o código de status 400', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });
  });
});
