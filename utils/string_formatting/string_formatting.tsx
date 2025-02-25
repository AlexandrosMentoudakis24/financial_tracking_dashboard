export const formatBankCardNumber = ({
	cardNumber,
}: { cardNumber: string }) => {
	if (cardNumber.length <= 0) throw new Error("Card number can not be empty");

	const firstQuarter = cardNumber.slice(0, 4);
	const lastQuarter = cardNumber.slice(12, 16);

	const formattedCardNumber = firstQuarter + " **** " + " **** " + lastQuarter;

	return formattedCardNumber;
};
