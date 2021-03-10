import moment from 'moment';

function dateValid(date) {

  let isValid = true;

  if (date.length < 10) {

    isValid = false;
    return isValid;

  }
  else {
    const dateFormat = moment(date.split('/').reverse().join('-'))
    const dateCheck = dateFormat.isValid()

    if (dateCheck) {
      return isValid;
    }

    isValid = false;
    return isValid;
  }

}

export { dateValid }