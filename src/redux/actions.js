// Action types
const ActionTypes = {
    INCREMENT1: 'INCREMENT1',
    INCREMENT2: 'INCREMENT2',
    MAKEPAUSE: 'MAKEPAUSE',
    RESTART: 'RESTART',
};

// Action creators
const increment1 = () => {
    return {
        type: ActionTypes.INCREMENT1,
      
    };
};
const increment2 = () => {
    return {
        type: ActionTypes.INCREMENT2,
      
    };
};
const makepause = () => {
    return {
        type: ActionTypes.MAKEPAUSE,
      
    };
};
const restart = () => {
    return {
        type: ActionTypes.RESTART,
      
    };
};

export { increment1, increment2, makepause, restart,ActionTypes };
