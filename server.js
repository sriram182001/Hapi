const Hapi=require('@hapi/hapi');
const Joi=require('joi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);


    server.route(
        {
        method:'POST',
        path:'/',
        handler:(request,response)=>{
            /*
            let str='';
            if(request.params.name)
            {
                str= `HELLO ${request.params.name}`;
            }
            else{
                str='HELLO';
            }
            
            return str;
            */

            const payload=request.payload;
            const a=payload.num1;
            const b=payload.num2;
            const c=payload.num3;
            return "The sum is: "+(a+b+c);
        },
    options:
    {
        validate:
        {
            payload:
                Joi.object({
                    num1:Joi.number().integer().min(1).max(100).required(),
                    num2:Joi.number().integer().min(1).max(100).default(2),
                    num3:Joi.number().integer().min(1).max(100).default(3)
                })

        }
    }
    }
    );

   

};
init();