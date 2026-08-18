const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /((?:\+|00)[17][ -]?|(?:\+|00)[1-9]\d{0,2}[ -]?|(?:\+|00)1-\d{3}[ -]?)?(0\d|[0-9]{3}|[1-9]{0,3})(?:((?:[ -][0-9]{2}){4})|((?:[0-9]{2}){4})|[ -][0-9]{3}[ -][0-9]{4}|([0-9]{7}))/;
const validationRules = {
  email: {
    required: true,
    regex: emailRegex,
    message: "Please enter a valid email address."
  },
  phone: {
    required: false,
    regex: phoneRegex,
    message: "Please enter a valid phone number."
  },
  "first-name": {
    required: true
  },
  "last-name": {
    required: true
  },
  default: {
    message: "This field is required!"
  }
};

export default validationRules;
