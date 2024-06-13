// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { DjangoAiAssistantViewsListAssistantsResponse, DjangoAiAssistantViewsListThreadsResponse, DjangoAiAssistantViewsCreateThreadData, DjangoAiAssistantViewsCreateThreadResponse, DjangoAiAssistantViewsDeleteThreadData, DjangoAiAssistantViewsDeleteThreadResponse, DjangoAiAssistantViewsListThreadMessagesData, DjangoAiAssistantViewsListThreadMessagesResponse, DjangoAiAssistantViewsCreateThreadMessageData, DjangoAiAssistantViewsCreateThreadMessageResponse, DjangoAiAssistantViewsDeleteThreadMessageData, DjangoAiAssistantViewsDeleteThreadMessageResponse } from './types.gen';

/**
 * List Assistants
 * @returns AssistantSchema OK
 * @throws ApiError
 */
export const djangoAiAssistantViewsListAssistants = (): CancelablePromise<DjangoAiAssistantViewsListAssistantsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/assistants/'
}); };

/**
 * List Threads
 * @returns ThreadSchema OK
 * @throws ApiError
 */
export const djangoAiAssistantViewsListThreads = (): CancelablePromise<DjangoAiAssistantViewsListThreadsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/threads/'
}); };

/**
 * Create Thread
 * @param data The data for the request.
 * @param data.requestBody
 * @returns ThreadSchema OK
 * @throws ApiError
 */
export const djangoAiAssistantViewsCreateThread = (data: DjangoAiAssistantViewsCreateThreadData): CancelablePromise<DjangoAiAssistantViewsCreateThreadResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/threads/',
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Delete Thread
 * @param data The data for the request.
 * @param data.threadId
 * @returns void No Content
 * @throws ApiError
 */
export const djangoAiAssistantViewsDeleteThread = (data: DjangoAiAssistantViewsDeleteThreadData): CancelablePromise<DjangoAiAssistantViewsDeleteThreadResponse> => { return __request(OpenAPI, {
    method: 'DELETE',
    url: '/threads/{thread_id}/',
    path: {
        thread_id: data.threadId
    }
}); };

/**
 * List Thread Messages
 * @param data The data for the request.
 * @param data.threadId
 * @returns ThreadMessagesSchemaOut OK
 * @throws ApiError
 */
export const djangoAiAssistantViewsListThreadMessages = (data: DjangoAiAssistantViewsListThreadMessagesData): CancelablePromise<DjangoAiAssistantViewsListThreadMessagesResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/threads/{thread_id}/messages/',
    path: {
        thread_id: data.threadId
    }
}); };

/**
 * Create Thread Message
 * @param data The data for the request.
 * @param data.threadId
 * @param data.requestBody
 * @returns unknown Created
 * @throws ApiError
 */
export const djangoAiAssistantViewsCreateThreadMessage = (data: DjangoAiAssistantViewsCreateThreadMessageData): CancelablePromise<DjangoAiAssistantViewsCreateThreadMessageResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/threads/{thread_id}/messages/',
    path: {
        thread_id: data.threadId
    },
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Delete Thread Message
 * @param data The data for the request.
 * @param data.threadId
 * @param data.messageId
 * @returns void No Content
 * @throws ApiError
 */
export const djangoAiAssistantViewsDeleteThreadMessage = (data: DjangoAiAssistantViewsDeleteThreadMessageData): CancelablePromise<DjangoAiAssistantViewsDeleteThreadMessageResponse> => { return __request(OpenAPI, {
    method: 'DELETE',
    url: '/threads/{thread_id}/messages/{message_id}/',
    path: {
        thread_id: data.threadId,
        message_id: data.messageId
    }
}); };