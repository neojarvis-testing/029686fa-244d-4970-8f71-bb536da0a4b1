// import User from '../../model/user';
import UserResolver from './resolver';
import CbResolver from './resolver';
import * as Boom from 'boom';
import Utils from '../../helper/utils';
import Logger from '../../helper/logger';
import * as Hapi from 'hapi';
export default class CbController {
    public qbresolver: any;
    constructor() {
        this.qbresolver = new CbResolver();
    }
    public create = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const requestdata: any = await this.qbresolver.save(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data: requestdata,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error.message));
        }
    };

    public getprojectBank = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POSTT - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.getprojectBank(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public updateById = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`PUT - ${Utils.getUrl(request)}`);
            const id = encodeURIComponent(request.params.id);
            const entity = await this.qbresolver.updateOneById(request.headers.authorization, id, request.payload);
            return response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public bulkUpdateById = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`PUT - ${Utils.getUrl(request)}`);
            const updates: any = request.payload.updates;
            const entity = await this.qbresolver.bulkUpdate(request.headers.authorization, updates);
            return response({
                statusCode: 200,
                data: {
                    success: true,
                    message: 'All QuestionBank Updated',
                },
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Not found') {
                return response(Boom.notFound());
            }
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation());
        }
    };

    public getById = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const id = encodeURIComponent(request.params.id);
            const entity = await this.qbresolver.getOneById(request.headers.authorization, id);
            return response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public getAll = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const entities = await this.qbresolver.getAll(request.headers.authorization, request.payload);

            return response({
                statusCode: 200,
                results: entities,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public getProjectCount = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const entities = await this.qbresolver.getProjectCount(request.headers.authorization, request.payload);

            return response({
                statusCode: 200,
                results: entities,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public getAllInfinite = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const entities = await this.qbresolver.getAllInfinite(request.headers.authorization, request.query.dataIds);

            return response({
                statusCode: 200,
                results: entities,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public getTags = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const entities = await this.qbresolver.getTags(request.headers.authorization, request.query.dataIds);
            return response({
                statusCode: 200,
                results: entities,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public deleteById = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`DELETE - ${Utils.getUrl(request)}`);
            const data = await this.qbresolver.deleteOneById(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Not found') {
                return response(Boom.notFound());
            }
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation());
        }
    };

    public deleteprojectById = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`DELETE - ${Utils.getUrl(request)}`);
            const data = await this.qbresolver.deleteprojectById(request.headers.authorization, request.params);
            return response({
                statusCode: 200,
                data,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Not found') {
                return response(Boom.notFound());
            }
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation());
        }
    };

    public bulkDeleteById = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`DELETE - ${Utils.getUrl(request)}`);
            await this.qbresolver.bulkDelete(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data: {
                    success: true,
                    message: 'All QuestionBank Deleted',
                },
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Not found') {
                return response(Boom.notFound());
            }
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation());
        }
    };

    public cloneById = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`CLONE - ${Utils.getUrl(request)}`);
            const data = await this.qbresolver.cloneById(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Not found') {
                return response(Boom.notFound());
            }
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation());
        }
    };

    public projectClone = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`CLONE - ${Utils.getUrl(request)}`);
            const data = await this.qbresolver.projectClone(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Not found') {
                return response(Boom.notFound());
            }
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation());
        }
    };

    public projectBulkClone = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`CLONE - ${Utils.getUrl(request)}`);
            const data = await this.qbresolver.projectBulkClone(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Not found') {
                return response(Boom.notFound());
            }
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation());
        }
    };

    public createproject = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const requestdata: any = await this.qbresolver.saveproject(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data: requestdata,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error.message));
        }
    };

    public getprojectTags = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);

            const entities = await this.qbresolver.getprojectTags(request.headers.authorization, request.query.dataIds);

            return response({
                statusCode: 200,
                results: entities,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public projectFilter = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const datas: any = request.payload;
            const cb_id: any = request.payload.cb_id;
            const data: any = await this.qbresolver.filter(request.headers.authorization, datas, cb_id);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public updateprojectbyId = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`PUT - ${Utils.getUrl(request)}`);

            const id = encodeURIComponent(request.params.project_id);
            const entity = await this.qbresolver.updateprojectbyId(request.headers.authorization, id, request.payload);

            return response({
                statuscode: 200,
                data: {
                    message: 'project  updated',
                    success: true,
                    project_id: id,
                },
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };
    public projectMove = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const project_id: any = encodeURIComponent(request.query.project_id);
            const pb_id: any = encodeURIComponent(request.query.pb_id);
            const data: any = await this.qbresolver.projectMove(request.headers.authorization, project_id, pb_id);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };
    public getSharedPB = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.getSharedPB(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };
    public importProjectBank = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.importProjectBank(request.headers.authorization, request.payload);
            return response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };
    public getsharepreivewtime = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.getsharepreivewtime(request.headers.authorization, request.payload);
            return response(entity);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };
    public add_new_docker_image = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.add_new_docker_image(request.headers.authorization, request.payload);
            return response(entity);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };

    public getprojectdetails = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.getprojectdetails(request.headers.authorization, request.payload);
            return response(entity);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };
    public get_docker_image = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.get_docker_image(request.headers.authorization, request.payload);
            return response(entity);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };
    public get_all_docker_image = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.get_all_docker_image(request.headers.authorization);
            return response(entity);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };
    public get_all_node_pool = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const entity = await this.qbresolver.get_all_node_pool(request.headers.authorization);
            return response(entity);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badImplementation(error));
        }
    };
}
