import ActivityFeedsResolver from './resolver';
import * as Boom from 'boom';
import Logger from '../../helper/logger';
import * as Hapi from 'hapi';
import Utils from '../../helper/utils';

export default class ActivityFeedsController {
    public resolver = new ActivityFeedsResolver();

    public addactivity = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.addactivity(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public getfeeds = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.getfeeds(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public removeactivity = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.removeactivity(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public shareactivity = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.shareactivity(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public follow = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.follow(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public unfollow = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.unfollow(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public followPublic = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.followPublic(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public getPublicfeeds = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            request.payload.remoteip = request.headers['x-real-ip'];
            const data: any = await this.resolver.getPublicfeeds(request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public addReaction = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.addReaction(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public addPublicDaily = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.addPublicDaily(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public unfollowDaily = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.unfollowDaily(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public getnetwork = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.getnetwork(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public gethashtags = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.gethashtags(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };

    public removereaction = async (request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            const data: any = await this.resolver.removereaction(request.headers.authorization, request.payload);
            return response(data);
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return response(Boom.unauthorized(error));
            }
            return response(Boom.badData(error.message));
        }
    };
}
