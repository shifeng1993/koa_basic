const Sequelize = require('sequelize')

export default (sequelize: any) => {
    return sequelize.define(
        'user',
        {
            'emp_id': {
                'type': Sequelize.CHAR(10),
                'allowNULL': false,
                'unique': true
            },
            'nick': {
                'type': Sequelize.CHAR(10),
                'allowNULL': false
            },
            'department': {
                'type': Sequelize.STRING(64),
                'allowNULL': false
            },
        }
    );
}