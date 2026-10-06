const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

const validationRules = {
  "first-name": {
    required: true,
    maxLength: 50,
    message: "Please enter your first name."
  },
  "last-name": {
    required: true,
    maxLength: 50,
    message: "Please enter your last name."
  },
  email: {
    required: true,
    regex: emailRegex,
    maxLength: 254,
    message: "Please enter a valid email address."
  },
  phone: {
    required: false,
    regex: phoneRegex,
    message: "Please enter a valid phone number (01603 515007, +44 1603 515007)."
  },
  subject: {
    required: false,
    maxLength: 150,
    message: "Subject must be 150 characters or fewer."
  },
  message: {
    required: true,
    maxLength: 2000,
    message: "Please enter a message."
  },
  default: {
    message: "This field is required!"
  }
};

export default validationRules;