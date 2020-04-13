export const creditState = (number) => {
    let crState = ''
    let stNumber = parseInt(number)
    switch (stNumber) {
        case 1:
            crState = "Pagado";
            break;
        case 3:
            crState = "En mora";
            break;
        case 6:
            crState = "Activo";
            break;
    }

    return crState;
}

export const creditStateSeverity = (number) => {
    let crState = ''
    let stNumber = parseInt(number)
    switch (stNumber) {
        case 1:
            crState = "info";
            break;
        case 3:
            crState = "error";
            break;
        case 6:
            crState = "success";
            break;
    }

    return crState;
}

export const convertCurrency = (value) => {
    let updateValue = value
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    
    updateValue = parseInt(updateValue)
    updateValue = formatterPeso.format(updateValue)

    return updateValue;
}