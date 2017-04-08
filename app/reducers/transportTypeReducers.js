const transport = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSPORT':
      return {
        id: action.id,
        name: action.name,
        value: action.value
      };
  }
};

const transports = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSPORT':
      return [
        ...state,
        transport(undefined, action)
      ]
  }
};

export {
  transport,
  transports
}