export const CardType = Object.freeze({
	Debit: "Debit Card",
	Credit: "Credit Card",
} as const);

export class BankCard {
	id: string;
	cardNumber: string;
	cardType: (typeof CardType)[keyof typeof CardType];
	accountMoney: number;
	cardPin: string;

	constructor({
		id,
		cardNumber,
		cardType,
		cardPin,
		accountMoney,
	}: {
		id: string;
		cardNumber: string;
		cardType: (typeof CardType)[keyof typeof CardType];
		cardPin: string;
		accountMoney: number;
	}) {
		this.id = id;
		this.cardNumber = cardNumber;
		this.cardType = cardType;
		this.cardPin = cardPin;
		this.accountMoney = accountMoney;
	}
}
