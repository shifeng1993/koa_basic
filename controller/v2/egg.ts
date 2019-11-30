/*
 * @Description: xxx控制器
 * @Author: shi_feng 90606
 * @Email: V_shi_feng@dahuatech.com
 * @Version: 1.0.0
 * @Date: 2019-08-03 10:48:30
 */

import {request, summary, tags, query, body, prefix, responses} from 'koa-swagger-decorator';

const tag = tags(['Egg']);

@prefix('/egg')
export default class EggRouter {

    /**
     * @description: 
     * @param {type} 
     * @return: 
     */
    @request('get', '/method1')
    @summary('控制器1')
    @tag
    @query({
        no: {type: 'string', description: 'nonono'}
    })
    // @responses({
    //     200: {description: 'file upload success'},
    //     500: {description: 'something wrong about server'}
    // })
    async method1(ctx: any) {
        const {no} = ctx.validatedQuery;
        // ctx.service.userModel.sync({force: true}).then(function () {
        //     return ctx.service.userModel.create({
        //         emp_id: '2',
        //         nick: 'zyx21',
        //         department: '技术'
        //     });
        //     // then的输入为上一步的结果
        // }).then(function (user: any) {

        //     console.log(user.get(
        //         {
        //             plain: true
        //         }
        //     ));

        //     // 查找一条数据
        //     // ctx.service.userModel.findOne(
        //     //     {
        //     //         where: {
        //     //             emp_id: '2'
        //     //         }
        //     //     }
        //     // ).then(function (result: any) {
        //     //     console.log('after create find  user');
        //     //     console.log(result);
        //     // });
        // });

        
        ctx.body = {no};
    }


    /**
     * @description: 
     * @param {type} 
     * @return: 
     */
    @request('post', '/method2')
    @summary('egg-like controller method2')
    @tag
    @body({
        yes: {
            type: 'string',
            require: true,
            description: 'yesyesyes',
            nullable: true
        }
    })
    async method2(ctx: any) {
        const {yes} = ctx.validatedBody;
        ctx.body = {yes};
    }
}
