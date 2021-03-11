import moment from 'moment';

function dateValid(date) {

  let isValid = false;

  if (date.length < 10) {

    // Invalid input Length 
    return isValid;

  }
  else {
    const dateFormat = moment(date.split('/').reverse().join('-'))
    const dateCheck = dateFormat.isValid()

    if (dateCheck) {
      // Date Format is valid
      isValid = true;
      return isValid;
    }

    // Date format is not valid
    isValid;
    return isValid;
  }

}

export { dateValid }