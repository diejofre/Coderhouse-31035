/*========== Modulos globales para DAOs ==========*/
import CustomError from "../Classes/CustomError.class.js";
import MongoDBClient from "../Classes/MongoDBClient.class.js";
import logger from "../utils/loggers.js";
/*========== Modulos especifico para DAOs ==========*/
import PersonaModel from "../models/Persona.model.js";
import DAO from "./DAO.class.js";

class PersonasDAOMongoDB extends DAO{
    constructor(){
        super();
        this.colecction = PersonaModel;
        this.conn = new MongoDBClient();
    }
    
    async listarAll() {
        let docs = [];
        try {
            await this.conn.connect();
            docs = await this.colecction.find({})
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
            logger.error(cuserr);
            throw cuserr;
        } finally {
            this.conn.disconnect();
            logger.info(`Elementos listados ${docs.length}`);
        }
    }

    async guardar(elemento) {
        try {
            await this.conn.connect();
            let doc = await this.colecction.create(elemento);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            logger.error(cuserr);
            throw cuserr;
        } finally {
            this.conn.disconnect();
            logger.info(`Elemento guardado ${elemento}`);
        }
    }
}

export default PersonasDAOMongoDB;