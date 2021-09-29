import BatchProcessingResolver from './resolver';
import * as Boom from 'boom';
import Utils from '../../helper/utils';
import Logger from '../../helper/logger';
import * as Hapi from 'hapi';
import { Batch } from 'aws-sdk';
export default class BatchProcessingController {
    public batchProcessingResolver: any;
    constructor() {
        this.batchProcessingResolver = new BatchProcessingResolver();
    }
    public suspiciousS3toDBcron = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.batchProcessingResolver.suspiciousS3toDBcron(request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };
    public automaticDifficultyLevel = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const entities: any = await this.batchProcessingResolver.automaticDifficultyLevel(request.payload);
            return response(entities).code(200);
        } catch (error) {
            Logger.error('Error: AUTODIFF: ', error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            } else {
                return response(Boom.badImplementation(error));
            }
        }
    };
    public SubjectWiseScores = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const token = request.headers.authorization;
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.SubjectWiseScores(token, data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
            if (error === 'unauthorized user') {
                return response(Boom.unauthorized(error));
            } else {
                return response(Boom.badImplementation(error));
            }
        }
    };
    public Skillscore = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const token = request.headers.authorization;
            const limit = request.payload.limit;
            const entities: any = await this.batchProcessingResolver.Skillscore(token, limit);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
            if (error === 'unauthorized user') {
                return response(Boom.unauthorized(error));
            } else {
                return response(Boom.badImplementation(error));
            }
        }
    };
    public timespentcalculate = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const token = request.headers.authorization;
            const limit = request.payload.limit;
            const entities: any = await this.batchProcessingResolver.timespentcalculate(token, limit);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
            if (error === 'unauthorized user') {
                return response(Boom.unauthorized(error));
            } else {
                return response(Boom.badImplementation(error));
            }
        }
    };
    public usersskillscore = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const token = request.headers.authorization;
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.usersskillscore(token, data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
            if (error === 'unauthorized user') {
                return response(Boom.unauthorized(error));
            } else {
                return response(Boom.badImplementation(error));
            }
        }
    };
    public questionsMetadata = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const token = request.headers.authorization;
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.questionsMetadata(token, data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
            if (error === 'unauthorized user') {
                return response(Boom.unauthorized(error));
            } else {
                return response(Boom.badImplementation(error));
            }
        }
    };
    public questionsMetadataTransfer = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const token = request.headers.authorization;
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.questionsMetadataTransfer(token, data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
            if (error === 'unauthorized user') {
                return response(Boom.unauthorized(error));
            } else {
                return response(Boom.badImplementation(error));
            }
        }
    };
    public contentPackaging = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.contentPackaging(data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
        }
    };

    public uploadToVimeo = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.uploadToVimeo(data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
        }
    };

    public vimeoIdentifyTranscode = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.vimeoIdentifyTranscode(data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
        }
    };

    public set_recognition_data = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const token = request.headers.authorization;
            const entities: any = await this.batchProcessingResolver.set_recognition_data(request.payload);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public syncCourseCompletioninDB = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.syncCourseCompletioninDB(data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
        }
    };

    public sftpcroninvite = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.sftpcroninvite(data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
        }
    };

    public sftpcronresult = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data = request.payload;
            const entities: any = await this.batchProcessingResolver.sftpcronresult(data);
            return response(entities).code(200);
        } catch (error) {
            Logger.error(error);
        }
    };
}
