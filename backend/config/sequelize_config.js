import 'dotenv/config';

export default {

  DEV: {
    dialect: 'postgres',
    host: process.env.DB_HOST_DEV,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASS_DEV,
    database: process.env.DB_NAME_DEV,
    define: {
        timestamps: true, 
        underscored: true
    },
    logging: false
  },

  HML: {
    dialect: 'postgres',
    host: process.env.DB_HOST_HML,
    username: process.env.DB_USER_HML,
    password: process.env.DB_PASS_HML,
    database: process.env.DB_NAME_HML,
    define: {
        timestamps: true, 
        underscored: true
    },
    logging: false
  },

  PRD: {
      dialect: 'postgres',
      host: process.env.DB_HOST_PRD,
      username: process.env.DB_USER_PRD,
      password: process.env.DB_PASS_PRD,
      database: process.env.DB_NAME_PRD,
      define: {
          timestamps: true, 
          underscored: true
      },
      logging: false
  }

};