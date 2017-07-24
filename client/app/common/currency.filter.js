class CurrencyFilter {
  
    static filter(currency){
        switch(currency) {
            case 'USD':
                return '$';
            break;
            case 'EURO':
                return '€';
            break;
            case 'ILS':
                return '₪';
            break;
        }
    }

}

export default CurrencyFilter;
