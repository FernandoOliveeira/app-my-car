// Masks created for PT-BR date and currency type

function maskDate(value) {
  value = value.replace(/\D/g, ""); // Removes all non-digits from the string

  value = value.replace(/^(\d{2})(\d)/g, "$1/$2"); // Separates the day and month first
  value = value.replace(/(\d)(\d{4})$/, "$1/$2"); // Separates the year from the rest

  return value;

}

function maskCurrency(value) {
  value = value.replace(/\D/g, ""); // Removes all non-digits from the string

  value = value.replace(/(\d)(\d{2})$/, "$1,$2"); // Separates the last two digits with comma 
  value = value.replace(/(?=(\d{3})+(\D))\B/g, "."); // Inserts a dot every three digits

  return value;
}


export { maskDate, maskCurrency }