"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/AppController.ts
var import_config = require("dotenv/config");
var import_express2 = __toESM(require("express"), 1);
var import_cors = __toESM(require("cors"), 1);

// src/routes/HelloWordRoutes.ts
var import_express = require("express");

// src/controllers/HelloWordControllers.ts
var HelloWordControllers = class {
  async getFullHelloWord(req, res) {
    return res.status(200).json({ message: "Hello Word!" });
  }
  async createNewHelloWord(req, res) {
    const { message } = req.body;
    return res.status(200).json({ message });
  }
  async updateHelloWord(req, res) {
    const { id } = req.params;
    const { message } = req.body;
    return res.status(200).json({ id, message });
  }
  async deleteHelloWord(req, res) {
    const { id } = req.params;
    const { message } = req.body;
    return res.status(200).json({ id, message });
  }
};
var HelloWordControllers_default = new HelloWordControllers();

// src/routes/HelloWordRoutes.ts
var HelloWordRoutes = (0, import_express.Router)();
HelloWordRoutes.get("/HelloWord", HelloWordControllers_default.getFullHelloWord);
HelloWordRoutes.post("/HelloWord", HelloWordControllers_default.createNewHelloWord);
HelloWordRoutes.put("/HelloWord/:id", HelloWordControllers_default.updateHelloWord);
HelloWordRoutes.delete("/HelloWord/:id", HelloWordControllers_default.deleteHelloWord);
var HelloWordRoutes_default = HelloWordRoutes;

// src/routes/index.ts
var Routes = [
  HelloWordRoutes_default
];

// src/config/Database.js
var ConfigDatabase = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    updatedAt: true
  }
};
var Database_default = ConfigDatabase;

// src/models/ProjectsModel.ts
var import_sequelize = require("sequelize");
var Projects = class extends import_sequelize.Model {
  init(sequelize) {
    Projects.init({
      id: import_sequelize.DataTypes.INTEGER,
      name: import_sequelize.DataTypes.STRING,
      description: import_sequelize.DataTypes.TEXT,
      userId: import_sequelize.DataTypes.INTEGER,
      createdAt: import_sequelize.DataTypes.DATE,
      updatedAt: import_sequelize.DataTypes.DATE
    }, {
      sequelize,
      name: {
        singular: "project",
        plural: "projects"
      }
    });
  }
};
var ProjectsModel_default = new Projects();

// src/models/index.ts
var models = [
  ProjectsModel_default
];

// src/database/index.ts
var Database = class {
  constructor() {
    this.connection = Database_default;
    this.init();
  }
  init() {
    models.forEach((model) => model.init(this.connection));
  }
};
var database_default = new Database();

// src/AppController.ts
var AppController = class {
  constructor() {
    this.server = (0, import_express2.default)();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(import_express2.default.json());
    this.server.use((0, import_cors.default)({
      methods: "[GET, POST, DELETE, PUT]",
      origin: "*",
      allowedHeaders: "Content-Type, Authorization",
      optionsSuccessStatus: 204
    }));
  }
  routes() {
    Routes.forEach((route) => {
      this.server.use(route);
    });
  }
};
var AppController_default = new AppController().server;

// src/server.ts
AppController_default.listen(process.env.PORT || 8080, () => {
  console.log(`npm run dev: Servidor rodando na porta ${process.env.PORT || 8080}`);
});
