const KEYBOARDS = {
    main:   {
            resize_keyboard: true,
            keyboard: [
                [{text:'Forecast in Kharkiv'}],
                [{text:'Exchange rates'}]
            ]
    },
    forecast: {
        resize_keyboard: true,
        keyboard: [
            [{text:'At intervals of 3 hours'}],
            [{text:'At intervals of 6 hours'}],
            [{text:'Back'}]
        ]
    },
    exchange: {
        resize_keyboard: true,
        keyboard: [
            [{text:'USD'}],
            [{text:'EUR'}],
            [{text:'Back'}]
        ]
    }
}


module.exports = {
    KEYBOARDS
}