import type { OrderInterface } from '../interfaces/OrderInterface';
import type { BaseResponse } from '../interfaces/responses/BaseResponse';
import { baseApiService } from './baseApiService';

export const orderService = {
    create: (qrToken: string, orderList: OrderInterface[]) =>
        baseApiService<BaseResponse>('/order/create', {
            method: 'POST',
            body: JSON.stringify({ qrToken, orderList }),
        }),
};