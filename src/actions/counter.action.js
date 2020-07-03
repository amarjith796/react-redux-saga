export const COUNT_INC = 'COUNT_INC';

export const COUNT_DEC = 'COUNT_DEC';

export const count_increment = () => {
    return {
        type: 'COUNT_INC_ASYNC'
    };
}

export const count_decrement = () => {
    return {
        type: COUNT_DEC
    };
}