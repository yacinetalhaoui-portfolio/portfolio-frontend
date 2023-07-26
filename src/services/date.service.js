const translate = (monthNumber) => {
    const months = [
        "Janv.", "Fév.", "Mars", "Avr.", "Mai", "Juin",
        "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."
    ];

    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1];
    } else {
        throw new Error("Numéro de mois invalide. Veuillez saisir un numéro de mois entre 1 et 12.");
    }
}

const splitDate = (rawDate) => {
    const [year, month] = rawDate.split('T')[0].split('-');
    return [year, month]
}

const createDateText = (begin_date, end_date) => {
    const begin_date_split = splitDate(begin_date);
    const end_date_split = splitDate(end_date);

    const begin_date_month = translate(begin_date_split[1]);
    const end_date_month = translate(end_date_split[1]);

    return `${begin_date_month} ${begin_date_split[0]} - ${end_date_month} ${end_date_split[0]}`
}

export const date_service = {
    translate, splitDate, createDateText
}