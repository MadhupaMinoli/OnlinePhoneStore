import { Injectable } from '@angular/core';
import { ResponseHandlerService} from './response-handler.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

  constructor(private responseHandler: ResponseHandlerService) { }

  sendAjaxRequest(param) {
    try {
      let req = {
        type: param.type ? param.type : 'GET',
        dataType: param.dataType ? param.dataType : 'json',
        contentType: param.contentType ? param.contentType : 'application/json; charset=utf-8',
        url: param.url,
        headers: {'X-App-Token': new Date().getTime()},

        success: (e) => {
          if ($.isFunction(param.onSuccess)) {
            param.onSuccess(e);
          }
        },

        error: (e) => {
          if ($.isFunction(param.onError)) {
            param.onError(e);
          }
        },

        timeout: param.timeout ? param.timeout : 10000,
        async: undefined,
        cache: undefined,
        data: undefined
      };

      if (param.async) {
        req.async = param.async;
      }

      if (param.cache) {
        req.cache = param.cache;
      }

      if (param.data) {
        req.data = param.data;
      }

      $.ajax(req);
    } catch (e) {
      if ($.isFunction(param.onError)) {
        param.onError({});
      }
    }
  }

  generateUrl(queryParams) {
    const urlPrefix = '';
    const queryArray = [];
    let url;

    for (const prop in queryParams) {
      if (queryParams.hasOwnProperty(prop)) {
        const encoded = encodeURIComponent(queryParams[prop]);
        queryArray[queryArray.length] = [prop, encoded].join('=');
      }
    }

    url = queryArray.join('&');

    if (urlPrefix) {
      url = [urlPrefix, url].join('?');
    }

    return url;
  }

  sendMobileBrandsRequest() {
    this.sendAjaxRequest({
      url: this.generateUrl({}),

      onSuccess: (e) => {
        this.responseHandler.processMobileBrandsRequest(e);
      },

      onError: (e) => {
        // show error message
      }
    });
  }
}
