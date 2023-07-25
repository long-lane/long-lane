const MenuReducer = (state = [], action) => {
  switch (action.type) {
    case "menuDisplay":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const PricingReducer = (state = [], action) => {
  switch (action.type) {
    case "billingMethod":
      return { ...state, ...action.payload };

    case "plan":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
const FormReducer = (state = [], action) => {
  switch (action.type) {
    case "shortForm":
      return { ...action.payload };

    case "contactForm":
      return { ...action.payload };

    default:
      return state;
  }
};

export { MenuReducer, PricingReducer, FormReducer };
